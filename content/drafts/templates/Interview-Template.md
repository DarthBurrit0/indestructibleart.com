= yaml =
number: /interviews/
source: "52447756"
title: ""
date: 2013-02-08
author: "Omar de Armas"
subtitle: ""
description: ""
layout: video
= yaml =

<div class="vid_container">
  <iframe src="http://player.vimeo.com/video/{{ page.source }}" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

<a href="{{ page.url }}" class='postTitleLink'><p class='postTitle'>{{ page.title }}</p></a>
<p class='postPublished'>{{ page.date.toDateString }}</p>
<p class='postAuthor'>By: {{ page.author }}</p>
<hr>
<p class='podcastSummary'>{{ page.subtitle }}</p>

<p class='podcastSummary'>{{ page.description }}</p>

Game Site:  
Developer:  
