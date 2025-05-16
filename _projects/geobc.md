---
layout: page
title: GeoBC Projects
description: STAC-API, AWS, Postgres, GeoServer, Python, Automation
img: assets/img/geobc.jpg
importance: 1
category: professional
related_publications: false
typograms: true
toc:
    beginning: true
---


## Cloud-Optimized GeoTIFFs

### Overview
Converting our existing historical geographic data, such as wildfire imagery, into newer, faster formats was a project that really interested me. I developed a plan to serve Cloud-Optimized GeoTIFFs (COGs) through Web Map Services (WMS) using GeoServer, with storage on Amazon S3. Although this plan was not fully completed during my term, it provided an excellent learning opportunity and a strong introduction to cloud-based geospatial data management.

### Main Idea
```typograms
+-----------------------+                   +------------------------+
|  Proprietary Formats  | convert, organize | COGs In Cloud Storage, |
|   in On Prem Storage  |-----------------> |   More Accessibility   |
+-----------------------+                   +------------------------+
```


The following PDF was a slide deck I prepared to outline the potential process:
<object data="https://ma-graff.github.io/assets/pdf/geoserverS3.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://ma-graff.github.io/assets/pdf/geoserverS3.pdf"> 
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://ma-graff.github.io/assets/pdf/geoserverS3.pdf">Download PDF</a>.</p>

</object>

<br>
## NG-9-1-1 & Digital Road Atlas

I developed an ArcGIS Pro tool in Python to automate the comparison of Next Generation 9-1-1 (NG911) roads and address points.
The NENA standard for NG-9-1-1 data was different from what we were using, and thus the existing unmatched addressing script
needed to be updated. This was done using Python - specifically geopandas.
I also collaborated on the DRA throughout my time at GeoBC, with the Atlas team.
