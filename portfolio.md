---
layout: page
title: portfolio
visible: true
permalink: /portfolio/
---

Some things I've done:

<div class="row">
    {% for project in site.portfolio %}

    <div class="col one project">
        <h3>{{ project.title }}</h3>
        <div class="thumbnail">
            {% if project.redirect %}
            <a href="{{ project.redirect }}" target="_blank">
            {% else %}
            <a href="{{ site.baseurl }}{{ project.url }}">
            {% endif %} 

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

    {% endfor %}
</div>