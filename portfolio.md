---
layout: page
title: portfolio
visible: true
permalink: /portfolio/
---

<script src="http://cdnjs.cloudflare.com/ajax/libs/list.js/1.2.0/list.min.js"></script>

<div id="projects">
    <p>These are some of the projects I liked the most to work on :)</p>
    <p>
        Filter them by tag: <input class="search" placeholder="Start typing" />
        <button class="btn active" id="filter-clear">ALL</button>
        <button class="btn" id="filter-web">WEB</button>
        <button class="btn" id="filter-mobile">MOBILE</button>
    </p>

    <div class="list">
        {% assign sorted_pages = site.portfolio | sort:"order" %}
        {% for project in sorted_pages %}

        <div class="row project">
            
            <div class="col one project_image">
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
            <div class="col two project_description">
                <h2>{{ project.title }}</h2>

                <p>{{ project.blurb }} 
                    &nbsp;
                    {% if project.redirect %}
                    <a href="{{ project.redirect }}" target="_blank">
                    {% else %}
                    <a href="{{ site.baseurl }}{{ project.url }}">
                    {% endif %} 
                        Read more <i class="fa fa-caret-right"></i>
                    </a>
                </p>
                
                <div class="row project_tags">
                    {% for tag in project.tags %}
                        <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
            </div>

        </div>
        {% endfor %}
    </div>
</div>

<script src="/js/portfolio.js"></script>