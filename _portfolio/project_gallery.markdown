---
layout: post
title: projects gallery
order: 2
description: gallery for the open innovation network
blurb: "Worked with MIT Media Lab's <a href='http://dazzagreenwood.com/bio.html' target='_blank'>Dazza Greenwood</a> to create extensible galleries for open source projects. This project started during the MIT Napkins2Launch class in January 2016."
tags: [WEB, Github API, HTML, CSS, JS, JSON, MaterializeCSS]
img: /img/portfolio/project_gallery_small.jpg
---

I have been working with Dazza Greenwood, lecturer and researcher at the MIT Media Lab, to develop a Project Gallery for the Open Innovation Network.

<div class="row">
	<img class="col two center" src="{{ site.baseurl }}/img/portfolio/project_gallery.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	Project Gallery for the <a href="http://codexhackathon.com/" target="_blank">2016 Codex Hackathon</a>
</div>

<br />

<div class="row center">
    <a href="http://github.com/OpenInnovationNetwork/Projects/" target="_blank">
      <i class="fa fa-github-square"></i> Source code
    </a>
    &nbsp; &nbsp;
    <a href="http://openinnovationnetwork.github.io/Projects" target="_blank">
      <i class="fa fa-television"></i> Demo
    </a>
</div>

<br />

The idea behind it is to create extensible and easily duplicable galleries, where you can group open-source projects and keep track of up-to-date information fed by the authors themselves, all through Github.

Anyone can fork the Project Gallery repository, add different project descriptions (using JSON files to store the data), and display the information they wish.

This is possible through JavaScript calls to the Github REST API to retrieve the data from the chosen repositories.

<br />

**Future developments** include:

* Improve documentation and simplify step-by-step explanation
* Improve design
* Include lists of labels and people in the JSON structure
* Create lists of repositories that will serve as sources for project data
  * Give as an option of repository list all the forked repos 