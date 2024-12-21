---
layout: page
title: GeoBC Work
description: Projects I worked on at GeoBC, including STAC, AWS, Postgres, GeoServer-related work.
img: assets/img/geobc.jpg
importance: 1
category: professional
related_publications: false
typograms: true
toc:
    beginning: true
---


## Cloud-Optimized GeoTIFFs

```typograms
+-----------------------+                   +------------------------+
|  Proprietary Formats  | convert, organize | COGs In Cloud Storage, |
|   in On Prem Storage  |-----------------> |   More Accessibility   |
+-----------------------+                   +------------------------+
```
A project that really interested me was this one. Converting our existing historical geographic data like wildfire imagery to new, faster formats
was something that peaked my interest. I worked on a plan to serve COGs (Cloud-Optimized GeoTIFFs) through WMS via GeoServer, hosted on S3 cloud storage. Although this plan did not get finished in my term, it was an excellent learning opportunity and introduction to cloud geospatial.


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
