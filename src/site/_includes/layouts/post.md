---
layout: layouts/quote.njk
pageClass: posts
templateEngineOverride: njk, md
---

<div id="post">
	<div class="post">
		<img class="post_image" src="{{ image }}">
		<h2 class="post_title">{{ title }}</h2>
		<div class="post_date_tag">
			<div class="blog_date"><time datetime="{{ page.date }}">{{ date | dateDisplay("LLLL d, y") }}</time></div>
		  {%- set tagUrl -%}/tags/{{ page.data.tags }}/{%- endset -%}
		  <div class="blog_tag"><a href="{{ tagUrl | url }}">{{ tags }}</a></div>
		</div>
	  <div class="post_text">{{ content | safe }}</div>
	  <div class="footnote"><p class="">Este post foi escrito por</p></div>
  </div>
</div>

