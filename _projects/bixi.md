---
layout: page
title: Bixi Analysis
description: Geo-Statistical Analysis, R, Leaflet
img: assets/img/bixi.png
importance: 1
category: personal
related_publications: false
map: true
---
## Summary

This project analyzes Montreal's BIXI bike share system data to uncover usage patterns, popular routes, and station activity. The analysis focuses on temporal patterns across seasons and spatial distribution of rides throughout the city.

## Insights


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bixi_proj/hour-season-usage.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bixi_proj/most-travelled-routes.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Bike Share Usage by Hour of Day & Season

- Summer is the most popular time
- Across seasons, trips peak at 8am and 3pm

### Top 10 Most Common Routes (start station and end station)

- Parc Jean Drapeau to itself is the most popular

### Most Popular Start Stations in 2024

[Click here to see the map.](https://ma-graff.github.io/assets/html/map.html)

## Data Structure

The analysis expects a CSV file with the following key columns:

- *STARTTIMEMS*: Trip start time in milliseconds
- *STARTSTATIONNAME*: Origin station name
- *ENDSTATIONNAME*: Destination station name
- *STARTSTATIONLATITUDE*: Origin station latitude
- *STARTSTATIONLONGITUDE*: Origin station longitude