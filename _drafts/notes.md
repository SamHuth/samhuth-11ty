---
layout: page.njk
title: Notes
meta:
  description: 'Ramblings, Rants, Rhetorical Questions..?'
date: Last Modified
---

Ramblings, Rants, Rhetorical Questions..?

![](/img/header-notes.gif)

## Archive

<hr />
<br />
Aint nothin' here...

{%- for note in collections.notes -%}  
    <p><a href="{{ note.url }}">{{ note.data.title }}</a><br />{{ note.data.meta.description }}</p>
{%- endfor -%}
