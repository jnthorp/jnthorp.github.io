---
title: Reflectify
summary: AI-powered learning reflection analyzer that predicts exam performance and provides personalized improvement strategies.
date: 2025-01-21
type: landing

sections:
  - block: hero
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: Reflectify
      image:
        filename: hero-academic.png
      cta:
        label: '**Analyze Your Learning Reflection**'
        url: '#reflectify-tool'
      cta_alt:
        label: Learn More
        url: '#about'
      cta_note:
        label: >-
          <div class="mb-3">
            <a href="#about" class="btn btn-outline-primary">🧠 How It Works</a>
            <a href="https://github.com/jnthorp/reflectify" class="btn btn-outline-secondary">📖 View Code</a>
          </div>
      text: |-
        **AI-powered learning reflection analysis** using machine learning and SHAP explainability to help students improve exam performance through data-driven insights.
        
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
          <span class="badge bg-primary">NLP</span>
          <span class="badge bg-success">Machine Learning</span>
          <span class="badge bg-info">SHAP Explainability</span>
          <span class="badge bg-warning text-dark">Educational Technology</span>
        </div>

  - block: about.biography
    id: about
    content:
      title: About Reflectify
      text: |
        Reflectify is an **AI-powered research tool** that analyzes students' written reflections on their learning experiences to predict exam performance and provide personalized improvement strategies.

        Built using **natural language processing**, **machine learning**, and **SHAP explainable AI**, Reflectify helps students understand which reflection strategies actually improve their academic outcomes.

        ### 🔬 Research-Based Features
        - **Performance Prediction**: Probabilistic exam improvement forecasting
        - **Strategy Detection**: Automatic identification of learning and reflection strategies  
        - **SHAP Explainability**: Clear explanations of which features matter most
        - **Personalized Feedback**: GPT-4 powered recommendations tailored to individual reflections
        - **Evidence-Based Guidance**: Specific action steps based on educational research

        ### 📊 Educational Impact
        This tool bridges the gap between **metacognitive theory** and **practical application**, helping students develop more effective reflection practices through data-driven insights.

  - block: markdown
    id: reflectify-tool
    content:
      title: 
      text: |
  - block: markdown
    id: reflectify-tool
    content:
      title: "Try Reflectify"
      text: |
        <div id="reflectify-app">
          <!-- Bootstrap CSS -->
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
          
          <!-- Main Analysis Interface -->
          <div class="card shadow-lg border-0 mb-5">
            <div class="card-header text-white" style="background: linear-gradient(45deg, #667eea, #764ba2);">
              <h3 class="card-title mb-0 d-flex align-items-center">
                <i class="fas fa-microscope me-3"></i>
                Analyze Your Learning Reflection
              </h3>
              <small class="opacity-75 mt-2 d-block">Get AI-powered insights into your study strategies and exam performance potential</small>
            </div>
            <div class="card-body p-4">
              
              <!-- Instructions -->
              <div class="alert alert-info mb-4">
                <h6 class="alert-heading mb-2">
                  <i class="fas fa-lightbulb me-2"></i>How to Write an Effective Reflection
                </h6>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="mb-0 small">
                      <li><strong>Study Strategies:</strong> Describe your learning methods</li>
                      <li><strong>Challenges:</strong> What difficulties did you encounter?</li>
                      <li><strong>Emotions:</strong> How did you feel about the material?</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="mb-0 small">
                      <li><strong>Past Experiences:</strong> Connect to previous learning</li>
                      <li><strong>Multiple Perspectives:</strong> Consider different viewpoints</li>
                      <li><strong>Critical Analysis:</strong> Question and evaluate your approach</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Input Form -->
              <form id="reflectionForm" class="mb-4">
                <div class="mb-4">
                  <label for="reflectionInput" class="form-label fw-semibold">
                    Your Learning Reflection:
                  </label>
                  <textarea 
                    id="reflectionInput" 
                    class="form-control shadow-sm" 
                    rows="10" 
                    placeholder="Write your reflection here... For example: 'When I started studying thermodynamics, I felt overwhelmed by the complex equations. I tried reading the textbook multiple times, but I realized that simply rereading wasn't helping me understand the underlying concepts. I decided to try explaining each concept in my own words and connecting it to real-world examples I could observe...'"
                    required>
                  </textarea>
                  <div class="form-text">
                    <small class="text-muted">
                      <i class="fas fa-info-circle me-1"></i>
                      Aim for 5-10 sentences. Be specific about your study methods, challenges, and insights.
                    </small>
                  </div>
                </div>
                
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button type="submit" id="analyzeBtn" class="btn btn-primary btn-lg px-5 shadow-sm">
                    <i id="analyzeIcon" class="fas fa-brain me-2"></i>
                    <span id="loadingSpinner" class="spinner-border spinner-border-sm me-2" role="status" style="display: none;"></span>
                    <span id="btnText">Analyze My Reflection</span>
                  </button>
                  
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4" onclick="resetForm()">
                    <i class="fas fa-undo me-2"></i>Reset
                  </button>
                </div>
              </form>
              
              <!-- Error Display -->
              <div id="errorAlert" class="alert alert-danger" style="display: none;">
                <i class="fas fa-exclamation-triangle me-2"></i>
                <span id="errorMessage"></span>
              </div>
              
              <!-- API Status -->
              <div class="text-center mt-3">
                <small class="text-muted">
                  <i class="fas fa-server me-1"></i>
                  API Status: <span id="apiStatus" class="badge bg-secondary">Checking...</span>
                </small>
              </div>
              
            </div>
          </div>

          <!-- Results Display (Initially Hidden) -->
          <div id="results" style="display: none;">
            <!-- Results will be populated by JavaScript -->
          </div>

          <!-- Include JavaScript -->
          <script src="/js/reflectify_hugo.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </div>        <!-- Custom CSS for Hugo Integration -->
        <style>
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem 0;
        }
        
        .metric-box {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .metric-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .metric-value {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          color: #6c757d;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .sentence-item {
          border-left: 4px solid #e9ecef;
          padding: 1rem;
          margin-bottom: 1rem;
          background: #f8f9fa;
          border-radius: 0 8px 8px 0;
        }
        
        .sentence-text {
          font-style: italic;
          color: #495057;
          line-height: 1.6;
        }
        
        .sentence-meta {
          margin-top: 0.75rem;
          font-size: 0.9rem;
        }
        
        .strategy-tag {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .strategy-tag:hover {
          transform: scale(1.05);
        }
        
        .academic-tooltip .tooltip-inner {
          max-width: 300px;
          text-align: left;
          font-size: 0.875rem;
        }
        
        .prediction-result {
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .analysis-section {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          background: #fff;
        }
        
        .loading-spinner {
          display: none;
        }
        
        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .btn-primary {
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: none;
        }
        
        .btn-primary:hover {
          background: linear-gradient(45deg, #5a67d8, #6b46c1);
          transform: translateY(-1px);
        }
        
        .formatted-content h6 {
          color: var(--bs-primary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .formatted-content ul {
          margin-bottom: 1rem;
        }
        
        .formatted-content li {
          margin-bottom: 0.25rem;
        }
        
        /* Ensure proper spacing in Hugo theme */
        .card-body {
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
          .card-body {
            padding: 1rem;
          }
          
          .metric-box {
            margin-bottom: 0.5rem;
          }
        }
        </style>

        <!-- JavaScript for Reflectify Functionality -->
        <script>
          // Configuration - Update this URL with your deployed API
          const API_URL = 'https://reflectify-api.railway.app'; // Update with your API URL
          
          // Strategy definitions for tooltips
          const strategyDefinitions = {
            'Elaborative Interrogation': 'Generating explanations for why facts or concepts are true.',
            'Self-Explanation': 'Explaining how new information is related to known information, or explaining steps taken during problem solving.',
            'Summarization': 'Writing summaries of to-be-learned texts.',
            'Highlighting/Underlining': 'Marking potentially important portions of to-be-learned materials while reading.',
            'Keyword Mnemonic': 'Using keywords and mental imagery to associate verbal materials.',
            'Imagery for Text': 'Attempting to form mental images of text materials while reading or listening.',
            'Rereading': 'Restudying text material again after an initial reading.',
            'Practice Testing': 'Self-testing or taking practice tests over to-be-learned material.',
            'Distributed Practice': 'Implementing a schedule of practice that spreads out study activities over time.',
            'Interleaved Practice': 'Implementing a schedule of practice that mixes different kinds of problems, or a schedule of study that mixes different kinds of material, within a single study session.',
            // Reflection strategies
            'Personal': 'Connecting learning to personal experiences and perspectives.',
            'Experience': 'Reflecting on past learning experiences and their outcomes.',
            'Perspective': 'Considering multiple viewpoints and alternative approaches.',
            'Critical Stance': 'Questioning assumptions and critically evaluating information.',
            'Feelings': 'Reflecting on emotional responses to learning experiences.',
            'Outcome': 'Evaluating the results and effectiveness of learning approaches.',
          };

          // Feature definitions for detailed explanations
          const featureDefinitions = {
            'refl_perspective_count': { name: 'Perspective Reflection (Count)', desc: 'Number of sentences reflecting on different perspectives or viewpoints.' },
            'refl_perspective_rate': { name: 'Perspective Reflection (Rate)', desc: 'Proportion of sentences reflecting on different perspectives.' },
            'refl_perspective_trend': { name: 'Perspective Reflection (Trend)', desc: 'Change in perspective reflection across the reflection.' },
            'refl_experience_count': { name: 'Personal Experience (Count)', desc: 'Number of sentences reflecting on past learning experiences.' },
            'refl_experience_rate': { name: 'Personal Experience (Rate)', desc: 'Proportion of sentences reflecting on past learning experiences.' },
            'refl_experience_trend': { name: 'Personal Experience (Trend)', desc: 'Change in experience reflection across the reflection.' },
            'refl_critical_stance_count': { name: 'Critical Stance (Count)', desc: 'Number of sentences showing critical analysis or questioning.' },
            'refl_critical_stance_rate': { name: 'Critical Stance (Rate)', desc: 'Proportion of sentences showing critical analysis.' },
            'refl_critical_stance_trend': { name: 'Critical Stance (Trend)', desc: 'Change in critical stance across the reflection.' },
            'refl_feelings_count': { name: 'Feelings Reflection (Count)', desc: 'Number of sentences reflecting on emotions related to learning.' },
            'refl_feelings_rate': { name: 'Feelings Reflection (Rate)', desc: 'Proportion of sentences reflecting on emotions.' },
            'refl_feelings_trend': { name: 'Feelings Reflection (Trend)', desc: 'Change in feelings reflection across the reflection.' },
            'refl_outcome_count': { name: 'Outcome Reflection (Count)', desc: 'Number of sentences evaluating results or effectiveness.' },
            'refl_outcome_rate': { name: 'Outcome Reflection (Rate)', desc: 'Proportion of sentences evaluating results.' },
            'refl_outcome_trend': { name: 'Outcome Reflection (Trend)', desc: 'Change in outcome reflection across the reflection.' },
            'refl_personal_count': { name: 'Personal Connection (Count)', desc: 'Number of sentences connecting learning to personal experience.' },
            'refl_personal_rate': { name: 'Personal Connection (Rate)', desc: 'Proportion of sentences connecting to personal experience.' },
            'refl_personal_trend': { name: 'Personal Connection (Trend)', desc: 'Change in personal connection across the reflection.' },
            'study_summarization_count': { name: 'Summarization (Count)', desc: 'Number of sentences summarizing key information.' },
            'study_summarization_rate': { name: 'Summarization (Rate)', desc: 'Proportion of sentences summarizing key information.' },
            'study_summarization_trend': { name: 'Summarization (Trend)', desc: 'Change in summarization across the reflection.' },
            'study_rereading_count': { name: 'Rereading (Count)', desc: 'Number of sentences indicating rereading as a strategy.' },
            'study_rereading_rate': { name: 'Rereading (Rate)', desc: 'Proportion of sentences indicating rereading.' },
            'study_rereading_trend': { name: 'Rereading (Trend)', desc: 'Change in rereading across the reflection.' },
            'study_self-explanation_count': { name: 'Self-Explanation (Count)', desc: 'Number of sentences indicating self-explanation as a strategy.' },
            'study_self-explanation_rate': { name: 'Self-Explanation (Rate)', desc: 'Proportion of sentences indicating self-explanation.' },
            'study_self-explanation_trend': { name: 'Self-Explanation (Trend)', desc: 'Change in self-explanation across the reflection.' },
            'study_highlighting/underlining_count': { name: 'Highlighting/Underlining (Count)', desc: 'Number of sentences indicating highlighting or underlining as a strategy.' },
            'study_highlighting/underlining_rate': { name: 'Highlighting/Underlining (Rate)', desc: 'Proportion of sentences indicating highlighting or underlining.' },
            'study_highlighting/underlining_trend': { name: 'Highlighting/Underlining (Trend)', desc: 'Change in highlighting or underlining across the reflection.' },
            'study_elaborative_interrogation_count': { name: 'Elaborative Interrogation (Count)', desc: 'Number of sentences indicating elaborative interrogation as a strategy.' },
            'study_elaborative_interrogation_rate': { name: 'Elaborative Interrogation (Rate)', desc: 'Proportion of sentences indicating elaborative interrogation.' },
            'study_elaborative_interrogation_trend': { name: 'Elaborative Interrogation (Trend)', desc: 'Change in elaborative interrogation across the reflection.' },
            'study_keyword_mnemonic_count': { name: 'Keyword Mnemonic (Count)', desc: 'Number of sentences indicating keyword mnemonic as a strategy.' },
            'study_keyword_mnemonic_rate': { name: 'Keyword Mnemonic (Rate)', desc: 'Proportion of sentences indicating keyword mnemonic.' },
            'study_keyword_mnemonic_trend': { name: 'Keyword Mnemonic (Trend)', desc: 'Change in keyword mnemonic across the reflection.' },
            'num_sentences': { name: 'Number of Sentences', desc: 'Total number of sentences in the reflection.' }
          };

          // Load the complete JavaScript implementation
          // (I'll continue with the rest of the JavaScript functions...)
        </script>

        <!-- Include the full JavaScript from our test.html -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        <script>
          // All the JavaScript functions from test.html will go here
          // (Main form submission, display functions, SHAP analysis, etc.)
          
          // Add the complete implementation here...
          // (This is where we'll include all our existing JavaScript)
        </script>

tags:
  - AI
  - Machine Learning  
  - NLP
  - Education
  - SHAP
  - Explainable AI
  - Learning Analytics
  - Metacognition
  
categories:
  - Projects
  - Research
  - Education

# Featured image
image:
  caption: 'AI-powered reflection analysis interface'
  focal_point: 'Smart'
  preview_only: false
---
