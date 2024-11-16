<script>
    let str = "String are plain text, so <h1>title</h1> won't render as heading"
    let html = "But when prefixed with @html <h1>they are</h1> rendered as is.... this is fine (xss 👀)"
</script>

<h1>3. Strings are plain text</h1>
<p>{str}</p>
<br />
<p>{@html html}</p>