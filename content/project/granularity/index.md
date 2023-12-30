---
title: representational granularity across the hippocampus
summary: A data-driven approach towards the long-standing, impactful issue of whether separate regions of the hippocampus naturally process representations at differing levels of granularity
tags:
  - neural geometry, machine learning, python, R
date: '2022-05-31T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: ''
  focal_point: Center

url_pdf: 'thorp-2022.pdf'
url_code: 'https://github.com/jnthorp/ivs-parcels_open'
url_dataset: 'http://rocklandsample.org/'

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ''
---

A particularly elusive puzzle concerning the hippocampus is how the structural differences along its long anteroposterior axis might beget meaningful functional differences, particularly in terms of the granularity of information processing. One measure posits to quantify this granularity by calculating the average statistical independence of the BOLD signal across neighboring voxels, or intervoxel similarity (IVS), and has shown the anterior hippocampus to process coarser-grained information than the posterior hippocampus. This measure, however, has yielded opposing results in studies of developmental and healthy aging samples, which also varied in fMRI acquisition parameters and hippocampal parcellation methods. To reconcile these findings, we measured IVS across two separate resting-state fMRI acquisitions and compared the results across many of the most widely used parcellation methods in a large young-adult sample of male and female humans (Acquisition 1, N = 233; Acquisition 2, N = 176). Finding conflicting results across acquisitions and parcellations, we reasoned that a data-driven approach to hippocampal parcellation is necessary. To this end, we implemented a group masked independent components analysis to identify functional subunits of the hippocampus, most notably separating the anterior hippocampus into separate anterior-medial, anterior-lateral, and posteroanterior-lateral components. Measuring IVS across these components revealed a decrease in IVS along the medial-lateral axis of the anterior hippocampus but an increase from anterior to posterior. We conclude that intervoxel similarity is deeply affected by parcellation and that grounding one's parcellation in a functionally informed approach might allow for a more complex and reliable characterization of the hippocampus.