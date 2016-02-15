---
layout: page
title: portfolio
visible: true
permalink: /portfolio/
---

{% for project in site.portfolio %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <h3>{{ project.title }}</h3>
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
