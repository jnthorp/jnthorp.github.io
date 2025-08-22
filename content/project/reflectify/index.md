---
title: "Reflectify"
summary: "AI-powered learning reflection analyzer that predicts exam performance and provides personalized improvement strategies."
date: 2025-01-21
type: project

# Featured image
image:
  caption: 'AI-powered reflection analysis interface'
  focal_point: Smart
  preview_only: false

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

links:
- icon: github
  icon_pack: fab
  name: Code
  url: https://github.com/jnthorp/reflectify
- icon: external-link-alt
  icon_pack: fas
  name: Try It
  url: "#reflectify-tool"
---

Reflectify is an **AI-powered research tool** that analyzes students' written reflections on their learning experiences to predict exam performance and provide personalized improvement strategies.

Built using **natural language processing**, **machine learning**, and **SHAP explainable AI**, Reflectify helps students understand which reflection strategies actually improve their academic outcomes.

## 🔬 Research-Based Features

- **Performance Prediction**: Probabilistic exam improvement forecasting
- **Strategy Detection**: Automatic identification of learning and reflection strategies  
- **SHAP Explainability**: Clear explanations of which features matter most
- **Personalized Feedback**: GPT-4 powered recommendations tailored to individual reflections
- **Evidence-Based Guidance**: Specific action steps based on educational research

## 📊 Educational Impact

This tool bridges the gap between **metacognitive theory** and **practical application**, helping students develop more effective reflection practices through data-driven insights.

---

## Try Reflectify

{{< load-photoswipe >}}

<style>
.reflectify-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: none;
  margin-bottom: 2rem;
}

.reflectify-header {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 1.5rem;
  border-radius: 12px 12px 0 0;
}

.reflectify-body {
  padding: 2rem;
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

@media (max-width: 768px) {
  .reflectify-body {
    padding: 1rem;
  }
}
</style>

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<div id="reflectify-tool" class="reflectify-card">
  <div class="reflectify-header">
    <h3 class="mb-0 d-flex align-items-center">
      <i class="fas fa-microscope me-3"></i>
      Analyze Your Learning Reflection
    </h3>
    <small class="opacity-75 mt-2 d-block">Get AI-powered insights into your study strategies and exam performance potential</small>
  </div>
  
  <div class="reflectify-body">
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
    
    <div id="errorAlert" class="alert alert-danger" style="display: none;">
      <i class="fas fa-exclamation-triangle me-2"></i>
      <span id="errorMessage"></span>
    </div>
    
    <div class="text-center mt-3">
      <small class="text-muted">
        <i class="fas fa-server me-1"></i>
        API Status: <span id="apiStatus" class="badge bg-secondary">Checking...</span>
      </small>
    </div>
  </div>
</div>

<div id="results" style="display: none;"></div>

<script src="/js/reflectify_hugo.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
