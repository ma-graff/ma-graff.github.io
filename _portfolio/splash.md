---
title: "Graphic Design Work"
layout: splash
permalink: /work/design-work
collection: _portfolio
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/splash-banner.jpg
  # actions:
  #   - label: "Explore more"
  #     url: "https://www.example.com"
  #caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Collection of past work, including logo design, merchandise design, and more."
intro: 
  - excerpt: 'I completed a month-long work experience as a graphic design student, took specialized classes in high school, and continue to work on passion projects that showcase my skills and creativity in graphic design.'
feature_row:
  - image_path: assets/images/postgis.png
    alt: "placeholder image 1"
    title: "Tech used 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: assets/images/postgis.png
    # image_caption: "Image courtesy of [Unsplash](https:/unsplash.com/)"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/images/postgis.png
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
feature_row2:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}