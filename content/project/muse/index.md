---
title: python package to reconnect muse headset
summary: rectifying a widespread connection issue with the MUSE mobile EEG headset
tags:
  - mobile EEG, python
date: '2022-06-31T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: ''
  focal_point: Center

url_code: 'https://github.com/jnthorp/muse-lsl-cu'
url_source: 'https://github.com/alexandrebarachant/muse-lsl'

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ''
---

Seems to be an issue endemic to the use of Muse headsets that the headsets will randomly llose connection with the laptop. This is particularly bad whenever multiple headsets are connected to multiple laptops within tight proximity. Because of this, our classroom study of multiple students wearing headsets being observed by one RA during a real lecture was nearly impossible to conduct.

To solve this, I adapted the popular muse-lsl package to monitor the connection with the headset and, in the event of a disconnect, safely end all the existing processes and set them up again. This sounded relatively trivial when I started, but a number of requirements and oddities pushed it towards non-triviality.

Firstly, muse-lsl requires a new terminal for every stream of data (EEG, ACC, GYRO, PPG). There might be a way to open all the ports necessary from one terminal, but I never figured it out. This brought about the necessity of opening up a number of terminals that could be monitored and quit in a controlled manner. On a Windows machine, this required a wrapper function that mimics the standard subprocess.Popen syntax but opens a socket, receives the subprocess cmd, then waits for the termination request. 