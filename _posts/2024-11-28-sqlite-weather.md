---
layout: post
title: Making an SQLite Weather Forecast Database
date: 2024-11-28 21:03:00
description: using sqlite (and eventually spatialite) for easier data transformation and visualization
tags: sql data
categories: projects
tabs: true
typograms: true
---

For context, I make weather reports every week for Avenue Road Property Management.
After completing CSC 370 (database systems), I wanted to try to integrate what I had learned to gain some new professional skills.

My current dataflow for generating reports was like this:
1. Aggregate data into pandas
2. Filter to relevant timeframe
3. Generate PDF using Python

And I want to improve it to be this:
1. Aggregate data to SQLite (automatically)
2. Filter using queries into PDF reports

I think this will make the process easier - stay tuned for updates!

