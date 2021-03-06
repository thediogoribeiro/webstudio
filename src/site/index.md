---
title: ZETA ZONE
subtitle: DIGITAL STUDIO
layout: layouts/base.njk
---

<!---------------------------------------------------------------------->
<div id="about">

## SOBRE

<div class="about-col-1" data-aos="fade-right"  data-aos-duration="1000" data-aos-easing="ease-in-sine">
Somos uma equipa jovem e competente, com uma missão em mente: redefinir objetivos estratégicos no panorama digital e, consequentemente, obter resultados à medida do seu negócio.
<br><br>
Os nossos conhecimentos nas principais áreas, sejam elas marketing, programação e design, são o combustível necessário para escalar a sua presença online.
<br><br>
Desenvolvemos soluções 100% personalizadas que potenciam verdadeiramente a sua ideia.
</div>

<div class="about-col-2" data-aos="fade-left"  data-aos-duration="1000" data-aos-easing="ease-in-sine">
<img class="img_team" src="/images/team-big.svg">
</div>

</div>
<!---------------------------------------------------------------------->
<div id="services">

## SERVIÇOS

<div class="services-col-1" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine" id="services-col-1" onclick="openService('services-col-1','services-info-1',0)">
<img class="service-1" src="/images/svg/object-group-regular.svg">

### Design Web

<div class="services-info-1" id="services-info-1">
- Wireframe
<br>
- Prototipagem
<br>
- UI/UX
<br>
- Responsivo
</div>

</div>

<div class="services-col-3" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine" id="services-col-3" onclick="openService('services-col-3','services-info-3',2)">
<img class="service-3" src="/images/svg/desktop-solid.svg">

### Programação

<div class="services-info-3" id="services-info-3">
- HTML
<br>
- CSS
<br>
- Bootstrap
<br>
- Javascript
<br>
- Node.js
<br>
- Android Apps
<br>
- Website builders
</div>

</div>

<div class="services-col-2" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine" id="services-col-2" onclick="openService('services-col-2','services-info-2',1)">
<img class="service-2" src="/images/svg/pencil-ruler-solid.svg">

### Design Gráfico

<div class="services-info-2" id="services-info-2">
- Logótipo
<br>
- Cartões de Visita
<br>
- Flyers
<br>
- Desdobráveis
<br>
- Poster
</div>

</div>

<div class="services-col-4" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine" id="services-col-4" onclick="openService('services-col-4','services-info-4', 3)">
<img class="service-4" src="/images/svg/bullseye-solid.svg">

### Marketing Digital

<div class="services-info-4" id="services-info-4">
- Publicidade paga online (PPC)
<br>
- Gestão de redes socias
<br>
- Email marketing
<br>
- SEO
</div>

</div>

</div>
<!---------------------------------------------------------------------->
<div id="clients">

## CLIENTES

<div class="glide">

  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide"><img class="img_client-1" src="/images/clients/cll-color.png"></li>
      <li class="glide__slide"><img class="img_client-2" src="/images/clients/congresso_da_saude.png"></li>
      <li class="glide__slide"><img class="img_client-3" src="/images/clients/logo-rv-100.gif"></li>
      <li class="glide__slide"><img class="img_client-4" src="/images/clients/claritylabporto.png"></li>
    </ul>
  </div>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">&#60;</button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">&#62;</button>
  </div>

</div>

</div>
<!---------------------------------------------------------------------->
<div id="blog">

## BLOG 

<div class="blog_feed" id="blog_feed">
  {%- for page in collections.posts | reverse -%}
    {%- if loop.index < site.screenRes -%}
      <div class="blog_post" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <div class="blog_image_box"><a href="{{ page.url }}"><img class="blog_image" src="{{ page.data.image }}"></a></div>
        {%- set tagUrl -%}/tags/{{ page.data.tags }}/{%- endset -%}
        <div class="blog_tag"><a class="tag" href="{{ tagUrl | url }}">{{ page.data.tags }}</a></div>
        <h4 class="blog_title"><a href="{{ page.url }}">{{ page.data.title }}</a></h4>
        <div class="blog_date"><time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time></div>
      </div> 
      <div class="tag_item" style="display: none"></div>
    {%- endif -%}
  {%- endfor -%}
</div>

<p class="all-posts" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-sine"><a href="{{ '/posts/' | url }}">Ver todos.</a></p>

</div>
<!---------------------------------------------------------------------->
<div id="talk">

## FALE CONNOSCO

<div class="talk-col-1" data-aos="fade-right"  data-aos-duration="1000" data-aos-easing="ease-in-sine">

Não hesite em falar connosco para esclarecer qualquer dúvida. Pode contactar-nos diretamente via telemóvel ou email. Estamos sempre disponíveis.

<p class="talk_text-1"><a href="mailto:info@zetazone.eu"><img class="talk_img-1" src="/images/svg/envelope-regular.svg">info@zetazone.eu</p></a>
<p class="talk_text-2"><a rel="noopener" href="https://api.whatsapp.com/send?phone=+351919969862" target="_blank"><img class="talk_img-2" src="/images/svg/whatsapp-brands.svg">+351 919 969 862</p></a>

</div>

<div class="talk-col-2" data-aos="fade-left"  data-aos-duration="1000" data-aos-easing="ease-in-sine">

<img class="" src="/images/conversation.svg">

</div>

</div>







