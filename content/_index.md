---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: experience
    id: experience
    content:
      title: experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Lecturer in the Discipline of Psychology
          company: Columbia University
          company_url: 'https://psychology.columbia.edu/content/john-nathaniel-thorp'
          company_logo: columbia
          location: Columbia University
          date_start: '2024-09-01'
          date_end: 
          description: |2-
              Generated engaging, research-focused curricula for 2 advanced undergraduate and graduate courses in research methods, statistics in behavioral sciences, and experimental design


        - title: Research Fellow
          company: Davachi Lab
          company_url: 'https://davachilab.psychology.columbia.edu/'
          company_logo: columbia
          location: Columbia University
          date_start: '2019-09-01'
          date_end: 
          description: |2-
              Designed and conducted 7 end-to-end behavioral and neuroimaging studies, leading to 3 conference posters, 5 invited talks, and 6 peer-reviewed manuscripts


        - title: Graduate Research Assistant
          company: Science of Learning Research (SOLER) Initiative
          company_url: 'https://soler.columbia.edu/'
          company_logo: columbia
          location: Columbia University
          date_start: '2022-01-01'
          date_end: '2024-05-31'
          description: Conducted 5 innovative studies quantifying educational intervention impacts, securing increased university funding through compelling published findings

        
        - title: Research Associate
          company: Adcock Laboratory
          company_url: 'https://www.adcocklab.org/'
          company_logo: duke
          location: Duke University
          date_start: '2017-07-01'
          date_end: '2019-05-31'
          description: –	Maintained project goals and deadlines for 5 behavioral studies by managing protocols, budgets, and recruitment
    
    design:
      columns: '2'
  - block: skills
    id: skills
    content:
      title: skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'
  - block: portfolio
    id: projects
    content:
      title: projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: all
          tag: '*'
        - name: neural geometry
          tag: neural geometry
        - name: human behavior
          tag: human behavior
        - name: teaching
          tag: teaching
        - name: machine learning
          tag: machine learning
        - name: python
          tag: python
        - name: R
          tag: R
        - name: NLP
          tag: nlp
        - name: fMRI
          tag: fMRI
        - name: mobile EEG
          tag: mobile EEG
        - name: eyetracker
          tag: eyetracker

    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Accomplish&shy;ments'
  #     subtitle:
  #     # Date format: https://docs.hugoblox.com/customization/#date-format
  #     date_format: Jan 2006
  #     # Accomplishments.
  #     #   Add/remove as many `item` blocks below as you like.
  #     #   `title`, `organization`, and `date_start` are the required parameters.
  #     #   Leave other parameters empty if not required.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - certificate_url: https://www.coursera.org
  #         date_end: ''
  #         date_start: '2021-01-25'
  #         description: ''
  #         icon: coursera
  #         organization: Coursera
  #         organization_url: https://www.coursera.org
  #         title: Neural Networks and Deep Learning
  #         url: ''
  #       - certificate_url: https://www.edx.org
  #         date_end: ''
  #         date_start: '2021-01-01'
  #         description: Formulated informed blockchain models, hypotheses, and use cases.
  #         icon: edx
  #         organization: edX
  #         organization_url: https://www.edx.org
  #         title: Blockchain Fundamentals
  #         url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
  #       - certificate_url: https://www.datacamp.com
  #         date_end: '2020-12-21'
  #         date_start: '2020-07-01'
  #         description: ''
  #         icon: datacamp
  #         organization: DataCamp
  #         organization_url: https://www.datacamp.com
  #         title: 'Object-Oriented Programming in R'
  #         url: ''
  #   design:
  #     columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
---
