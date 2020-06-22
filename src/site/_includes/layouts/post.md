---
layout: layouts/quote.njk
pageClass: posts
templateEngineOverride: njk, md
---

<div id="post">
	<div class="post">
		{%- for page in collections.posts | reverse -%}
			<img class="post_image" src="{{ image }}">
			{%- set tagUrl -%}/tags/{{ page.data.tags }}/{%- endset -%}
		  <div class="blog_tag post_tag"><a class="tag" href="{{ tagUrl | url }}">{{ tags }}</a></div>
			<h2 class="post_title">{{ title }}</h2>
			<div class="blog_date post_date"><time datetime="{{ page.date }}">{{ date | dateDisplay("LLLL d, y") }}</time></div>
		  <div class="post_text">{{ content | safe }}</div>
		  <div class="footnote" style="display: none"><p class="">Este post foi escrito por</p></div>
		{%- endfor -%}
  </div>
  <div class="tag_item" style="display: none"></div>
  <p class="all-posts" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine"><a href="{{ '/posts/' | url }}">Ver todos.</a></p>
</div>

