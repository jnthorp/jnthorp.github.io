// Complete Reflectify JavaScript Implementation for Hugo Integration
// This file contains all the functionality from test.html adapted for Hugo

// Configuration - Railway API URL
const API_URL = 'https://reflectify-api.up.railway.app';

// Main form submission handler
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up form handler');
  
  const form = document.getElementById('reflectionForm');
  console.log('Form element found:', form);
  
  if (!form) {
    console.error('Form element not found!');
    return;
  }
  
  form.addEventListener('submit', async function(e) {
    console.log('Form submitted!');
    e.preventDefault();
    
    const reflectionInput = document.getElementById('reflection');
    console.log('Reflection input found:', reflectionInput);
    
    if (!reflectionInput) {
      console.error('Reflection input not found!');
      return;
    }
    
    const reflection = reflectionInput.value.trim();
    console.log('Reflection text:', reflection);
    
    if (!reflection) {
      showError('Please enter your learning reflection.');
      return;
    }
    
    setLoadingState(true);
    hideError();
    
    const startTime = performance.now();
    
    try {
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reflection: reflection })
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const results = await response.json();
      
      if (results.error) {
        throw new Error(results.error);
      }
      
      displayResults(results, startTime);
      
    } catch (error) {
      console.error('Analysis error:', error);
      showError(error.message || 'An error occurred during analysis. Please try again.');
    } finally {
      setLoadingState(false);
    }
  });

  // API status check removed - no apiStatus element in HTML
});

function setLoadingState(loading) {
  const button = document.getElementById('analyzeBtn');
  const icon = document.getElementById('analyzeIcon');
  const spinner = document.getElementById('loadingSpinner');
  
  if (!button) {
    console.error('analyzeBtn not found');
    return;
  }
  
  if (loading) {
    button.disabled = true;
    if (icon) icon.style.display = 'none';
    if (spinner) spinner.style.display = 'inline-block';
    button.innerHTML = '<span class="spinner-border spinner-border-sm mr-2" role="status"></span>Analyzing...';
  } else {
    button.disabled = false;
    if (icon) icon.style.display = 'inline';
    if (spinner) spinner.style.display = 'none';
    button.innerHTML = '<i class="fas fa-microscope mr-2"></i>Analyze My Reflection';
  }
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  const errorSection = document.getElementById('errorSection');
  const results = document.getElementById('results');
  
  if (errorMessage) errorMessage.textContent = message;
  if (errorSection) errorSection.style.display = 'block';
  if (results) results.style.display = 'none';
}

function hideError() {
  const errorSection = document.getElementById('errorSection');
  if (errorSection) errorSection.style.display = 'none';
}

function resetForm() {
  document.getElementById('reflection').value = '';
  hideError();
  document.getElementById('results').style.display = 'none';
}

function displayResults(results, startTime) {
  const resultsDiv = document.getElementById('results');
  const { prediction, analysis, feedback, feature_analysis } = results;
  
  const processingTime = Math.round(performance.now() - startTime);
  
  resultsDiv.innerHTML = `
    <div class="row mt-4">
      <div class="col-12">
        <!-- Strategy Analysis (moved up) -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">
              <i class="fas fa-lightbulb me-2"></i>Learning Strategies Detected
            </h5>
          </div>
          <div class="card-body">
            ${formatStrategySummary(feature_analysis.strategy_summary)}
          </div>
        </div>

        <!-- Prediction Results -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header text-white" style="background: linear-gradient(45deg, #667eea, #764ba2);">
            <h5 class="mb-0">
              <i class="fas fa-chart-bar me-2"></i>Performance Prediction
            </h5>
          </div>
          <div class="card-body">
            <div class="row text-center">
              <div class="col-md-3">
                <div class="metric-box">
                  <div class="metric-value ${getProbabilityClass(prediction.improvement_probability)}">${(prediction.improvement_probability * 100).toFixed(1)}%</div>
                  <div class="metric-label">Improvement Probability</div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="metric-box">
                  <div class="metric-value">${prediction.predicted_improvement ? 'Likely to Improve' : 'Less Likely to Improve'}</div>
                  <div class="metric-label">Prediction</div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="metric-box">
                  <div class="metric-value">${(prediction.confidence * 100).toFixed(1)}%</div>
                  <div class="metric-label">Confidence</div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="metric-box">
                  <div class="metric-value">${processingTime}ms</div>
                  <div class="metric-label">Processing Time</div>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <p class="text-muted fst-italic">${prediction.interpretation}</p>
            </div>
          </div>
        </div>

        <!-- SHAP Feature Analysis -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header text-white" style="background: linear-gradient(45deg, #667eea, #764ba2);">
            <h5 class="mb-0">
              <i class="fas fa-brain me-2"></i>AI Feature Analysis & Improvement Guidance
            </h5>
            <small class="opacity-75">Powered by SHAP explainable AI</small>
          </div>
          <div class="card-body">
            <div id="featureInsights"></div>
          </div>
        </div>

        <!-- Personalized Feedback -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">
              <i class="fas fa-user-graduate me-2"></i>Personalized Feedback
            </h5>
            <small class="opacity-75">AI-generated recommendations based on your reflection</small>
          </div>
          <div class="card-body formatted-content">
            ${formatFeedback(feedback)}
          </div>
        </div>

        <!-- Sentence Analysis -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header bg-secondary text-white">
            <h5 class="mb-0">
              <i class="fas fa-list-ol me-2"></i>Sentence-by-Sentence Analysis
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <small class="text-muted">
                <i class="fas fa-info-circle me-1"></i>
                This shows which learning strategies were detected in each sentence.
              </small>
            </div>
            <div id="sentenceAnalysis"></div>
          </div>
        </div>

        <!-- Analysis Summary -->
        <div class="card shadow-sm">
          <div class="card-header bg-dark text-white">
            <h5 class="mb-0">
              <i class="fas fa-chart-pie me-2"></i>Analysis Summary
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <strong>Total Sentences:</strong> <span class="text-primary">${analysis.total_sentences}</span>
              </div>
              <div class="col-md-4">
                <strong>Features Extracted:</strong> <span class="text-success">${analysis.features_extracted}</span>
              </div>
              <div class="col-md-4">
                <strong>Processing Time:</strong> <span class="text-info">${processingTime}ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Display feature insights and sentence analysis
  displayFeatureInsights(prediction.top_contributing_features);
  displaySentenceAnalysis(results.sentence_analysis);
  
  resultsDiv.style.display = 'block';
  
  // Scroll to results
  setTimeout(() => {
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

function getProbabilityClass(probability) {
  if (probability >= 0.7) return 'text-success';
  if (probability >= 0.4) return 'text-warning';
  return 'text-danger';
}

function formatFeedback(feedback) {
  return feedback
    .replace(/\*\*(.*?)\*\*/g, '<h6 class="text-primary mt-3 mb-2">$1</h6>')
    .replace(/\n\n/g, '</p><p class="mb-3">')
    .replace(/^/, '<p class="mb-3">')
    .replace(/$/, '</p>')
    .replace(/- (.*?)(?=\n|$)/g, '<li class="mb-1">$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul class="mb-3">$1</ul>');
}

function formatStrategySummary(strategySummary) {
  let html = '';
  
  if (strategySummary.reflection_strategies_found && strategySummary.reflection_strategies_found.length > 0) {
    html += '<div class="mb-3"><h6>Reflection Strategies:</h6>';
    strategySummary.reflection_strategies_found.forEach(strategy => {
      const definition = strategyDefinitions[strategy] || strategyDefinitions[strategy.charAt(0).toUpperCase() + strategy.slice(1)] || 'Reflection strategy for metacognitive learning.';
      html += `<span class="badge bg-success me-1 mb-1 strategy-tag" 
                   data-bs-toggle="tooltip" 
                   data-bs-placement="top" 
                   data-bs-title="${definition}">${strategy}</span>`;
    });
    html += '</div>';
  }
  
  if (strategySummary.study_strategies_found && strategySummary.study_strategies_found.length > 0) {
    html += '<div class="mb-3"><h6>Study Strategies:</h6>';
    strategySummary.study_strategies_found.forEach(strategy => {
      const definition = strategyDefinitions[strategy] || strategyDefinitions[strategy.charAt(0).toUpperCase() + strategy.slice(1)] || 'Evidence-based study technique for improving learning.';
      html += `<span class="badge bg-primary me-1 mb-1 strategy-tag" 
                   data-bs-toggle="tooltip" 
                   data-bs-placement="top" 
                   data-bs-title="${definition}">${strategy}</span>`;
    });
    html += '</div>';
  }
  
  if (html === '') {
    html = '<p class="text-muted">No specific strategies detected in this reflection.</p>';
  }
  
  // Initialize tooltips
  setTimeout(() => {
    initializeTooltips();
  }, 100);
  
  return html;
}

function getSpecificGuidance(feature, direction) {
  const guidance = {
    'refl_experience_trend': {
      increase: "Make sure you're still referencing personal experiences at the end of your reflection, using those concrete experiences to predict future outcomes and inform your learning strategies.",
      decrease: "Reduce the emphasis on personal experience references later in your reflection. Focus more on general principles and strategies rather than specific past experiences."
    },
    'refl_experience_count': {
      increase: "Include more specific examples of your past learning experiences. Describe what worked, what didn't, and how those experiences shaped your approach to current learning.",
      decrease: "Reduce the number of personal experience examples. Focus more on current insights and forward-looking analysis rather than past experiences."
    },
    'refl_perspective_count': {
      increase: "Consider multiple viewpoints in your reflection. Ask yourself: How might others approach this? What alternative explanations exist? Include different perspectives on your learning process.",
      decrease: "Focus on fewer perspectives but explore them more deeply. Avoid jumping between too many different viewpoints in your reflection."
    },
    'refl_critical_stance_trend': {
      increase: "Build up your critical analysis throughout the reflection. Start with basic observations and progressively question assumptions, evaluate evidence, and challenge your own thinking.",
      decrease: "Maintain consistent critical thinking rather than increasing it dramatically. Avoid becoming overly critical or analytical later in your reflection."
    },
    'study_rereading_count': {
      increase: "Mention more instances where you reread material for better understanding. Describe when and why rereading helped your comprehension.",
      decrease: "Focus on fewer but more detailed discussions of rereading. Write longer, more substantive sentences that connect your rereading strategies to specific learning outcomes."
    },
    'study_rereading_rate': {
      increase: "When you do mention rereading, make each discussion comprehensive and meaningful. Write detailed sentences that explain how strategic rereading connected to your understanding and outcomes.",
      decrease: "Minimize discussion of rereading. Instead, emphasize more effective study strategies like retrieval practice, spaced repetition, or concept mapping."
    },
    'study_summarization_count': {
      increase: "Describe more instances where you created summaries or condensed information. Explain how summarizing helped you identify key concepts and relationships.",
      decrease: "Reduce emphasis on summarization activities. Focus on other active learning strategies that might be more effective for your learning goals."
    },
    'study_summarization_rate': {
      increase: "Dedicate more of your reflection to discussing how you summarize and synthesize information. Explain your summarization process and its benefits.",
      decrease: "Spend less time discussing summarization techniques. Balance with other learning strategies like self-explanation or practice testing."
    }
  };
  
  const featureGuidance = guidance[feature];
  if (!featureGuidance) {
    return direction === 'increase' ? 
      'Focus more on this aspect in your reflections to improve exam performance.' :
      'Reduce emphasis on this aspect to optimize your learning approach.';
  }
  
  return featureGuidance[direction] || 'No specific guidance available.';
}

function displayFeatureInsights(features) {
  const container = document.getElementById('featureInsights');
  if (!features || features.length === 0) {
    container.innerHTML = '<p class="text-muted">No feature insights available.</p>';
    return;
  }
  
  features.sort((a, b) => Math.abs(b.importance) - Math.abs(a.importance));
  
  // Check for the rereading paradox
  const hasRereadingCount = features.some(f => f.feature === 'study_rereading_count');
  const hasRereadingRate = features.some(f => f.feature === 'study_rereading_rate');
  const rereadingCountFeature = features.find(f => f.feature === 'study_rereading_count');
  const rereadingRateFeature = features.find(f => f.feature === 'study_rereading_rate');
  
  const showRereadingExplanation = hasRereadingCount && hasRereadingRate && 
    rereadingCountFeature?.improvement_direction === 'decrease' && 
    rereadingRateFeature?.improvement_direction === 'increase';
  
  let html = `
    <div class="mb-3">
      <small class="text-muted">
        <i class="fas fa-info-circle me-1"></i>
        <strong>How to read this table:</strong><br>
        • <i class="fas fa-arrow-up text-success"></i> <strong>INCREASE</strong>: Higher values improve exam performance<br>
        • <i class="fas fa-arrow-down text-danger"></i> <strong>DECREASE</strong>: Lower values improve exam performance<br>
        • <span style="color: #ff9800; font-size:1.1em;">⚠️</span> Feature is important but barely present in your reflection<br>
        • <span style="color: #28a745; font-size:1.1em;">✅</span> Feature can hurt performance and you're keeping it low
      </small>
    </div>`;
  
  // Add rereading paradox explanation if needed
  if (showRereadingExplanation) {
    html += `
    <div class="alert alert-info mb-3" style="border-left: 4px solid #0dcaf0;">
      <div class="d-flex align-items-start">
        <i class="fas fa-lightbulb text-info me-2 mt-1" style="font-size: 1.2em;"></i>
        <div>
          <h6 class="alert-heading mb-2">🤔 Understanding the Rereading Strategy Paradox</h6>
          <p class="mb-2"><strong>You might notice something counterintuitive:</strong> The model suggests <span class="text-danger">decreasing</span> rereading count but <span class="text-success">increasing</span> rereading rate. Here's why this makes sense:</p>
          <div class="row">
            <div class="col-md-6">
              <div class="card bg-light border-0 mb-2">
                <div class="card-body py-2 px-3">
                  <h6 class="text-success mb-1"><i class="fas fa-arrow-up me-1"></i>Increase Rate</h6>
                  <small>Make rereading discussions more <strong>comprehensive and detailed</strong></small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-light border-0 mb-2">
                <div class="card-body py-2 px-3">
                  <h6 class="text-danger mb-1"><i class="fas fa-arrow-down me-1"></i>Decrease Count</h6>
                  <small>Focus on fewer <strong>total mentions</strong> but make each substantive</small>
                </div>
              </div>
            </div>
          </div>
          <p class="mb-1"><strong>The Strategy:</strong> Write longer, more detailed sentences that connect rereading strategies to specific learning outcomes, rather than brief casual mentions.</p>
        </div>
      </div>
    </div>`;
  }
  
  html += `
    <div class="table-responsive">
      <table class="table table-sm table-striped align-middle">
        <thead class="table-dark">
          <tr>
            <th>Feature</th>
            <th>Importance</th>
            <th>Your Value</th>
            <th>Guidance</th>
            <th>Specific Action Steps</th>
          </tr>
        </thead>
        <tbody>`;
  
  features.forEach(f => {
    const highImportance = Math.abs(f.importance) > 0.05;
    const lowValue = Math.abs(f.value) < 0.1;
    
    let directionIcon = '<i class="fas fa-minus text-muted"></i>';
    let directionClass = 'text-muted';
    
    if (f.improvement_direction === 'increase') {
      directionIcon = '<i class="fas fa-arrow-up text-success"></i>';
      directionClass = 'text-success fw-bold';
    } else if (f.improvement_direction === 'decrease') {
      directionIcon = '<i class="fas fa-arrow-down text-danger"></i>';
      directionClass = 'text-danger fw-bold';
    }
    
    let importanceClass = 'badge bg-secondary';
    let importanceText = 'Low';
    const shapImportance = f.shap_importance || 0;
    
    if (shapImportance > 0.01) {
      importanceClass = 'badge bg-danger';
      importanceText = 'High';
    } else if (shapImportance > 0.005) {
      importanceClass = 'badge bg-warning text-dark';
      importanceText = 'Medium';
    }
    
    let flag = '';
    if (highImportance && lowValue) {
      if (f.improvement_direction === 'increase') {
        flag = ' <span title="⚠️ Missing Opportunity: Important feature barely present in your reflection" style="color: #ff9800; font-size:1.1em;">⚠️</span>';
      } else {
        flag = ' <span title="✅ Good News: This can hurt performance and you\'re keeping it low" style="color: #28a745; font-size:1.1em;">✅</span>';
      }
    }
    
    const def = featureDefinitions[f.feature] || { 
      name: f.feature.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), 
      desc: 'No description available.' 
    };
    
    let btnClass = 'btn btn-sm btn-outline-primary';
    if (f.feature.startsWith('refl_')) {
      btnClass = 'btn btn-sm btn-outline-success';
    }
    
    html += `<tr>
      <td>
        <button type="button" class="${btnClass} strategy-tag" 
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                data-bs-title="${def.desc}" 
                style="font-size: 0.85em; border: none; background: none; text-align: left;">${def.name}${flag}</button>
      </td>
      <td>
        <span class="${importanceClass}">${importanceText}</span>
        ${shapImportance > 0 ? `<br><small class="text-info">SHAP: ${shapImportance.toFixed(3)}</small>` : ''}
      </td>
      <td>${f.value.toFixed(2)}</td>
      <td>
        <div class="d-flex align-items-center">
          ${directionIcon}
          <span class="${directionClass} ms-2">
            ${f.improvement_direction ? f.improvement_direction.toUpperCase() : 'UNKNOWN'}
          </span>
        </div>
      </td>
      <td>
        <small class="text-muted">
          ${getSpecificGuidance(f.feature, f.improvement_direction)}
        </small>
      </td>
    </tr>`;
  });
  
  html += `
        </tbody>
      </table>
    </div>`;
  
  container.innerHTML = html;
  
  // Initialize tooltips
  setTimeout(() => {
    initializeTooltips();
  }, 100);
}

function displaySentenceAnalysis(sentences) {
  const container = document.getElementById('sentenceAnalysis');
  if (!sentences || sentences.length === 0) {
    container.innerHTML = '<p class="text-muted">No sentence analysis available.</p>';
    return;
  }
  
  let html = '';
  sentences.forEach((sentence, index) => {
    const createStrategyTags = (strategies, type) => {
      if (!strategies || strategies.length === 0) {
        return '<span class="text-muted fst-italic">None detected</span>';
      }
      
      return strategies.map(strategy => {
        const definition = strategyDefinitions[strategy] || 'Learning strategy identified in this sentence.';
        const badgeClass = type === 'reflection' ? 'bg-success' : 'bg-primary';
        return `<span class="badge ${badgeClass} me-1 mb-1" 
                     data-bs-toggle="tooltip" 
                     data-bs-placement="top" 
                     data-bs-title="${definition}"
                     style="font-size: 0.7rem;">${strategy}</span>`;
      }).join('');
    };
    
    const reflStrategyTags = createStrategyTags(sentence.reflection_strategies || [], 'reflection');
    const studyStrategyTags = createStrategyTags(sentence.study_strategies || [], 'study');
    
    html += `
      <div class="border-start border-4 border-primary ps-3 mb-3 py-2" style="background: #f8f9fa;">
        <div class="d-flex align-items-start mb-2">
          <span class="badge bg-primary me-2">${index + 1}</span>
          <div class="flex-grow-1">
            <p class="mb-2 fst-italic text-dark">"${sentence.sentence}"</p>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-2">
                  <strong class="text-success">
                    <i class="fas fa-mirror me-1"></i>Reflection Strategies:
                  </strong>
                  <div class="mt-1">${reflStrategyTags}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-2">
                  <strong class="text-primary">
                    <i class="fas fa-book-open me-1"></i>Study Strategies:
                  </strong>
                  <div class="mt-1">${studyStrategyTags}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  // Initialize tooltips for sentence analysis
  setTimeout(() => {
    initializeTooltips();
  }, 100);
}

function initializeTooltips() {
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (window.bootstrap) {
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new window.bootstrap.Tooltip(tooltipTriggerEl, {
        customClass: 'academic-tooltip'
      });
    });
  }
}

// checkApiStatus function removed - apiStatus element doesn't exist in HTML
