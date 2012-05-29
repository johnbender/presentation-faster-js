!SLIDE
<h1>Faster JavaScript <div style="font-size: 0.6em; color: #444">with</div> Category Theory</h1>
johnbender.github.com/presentation-faster-js

!SLIDE bullets mono-bullets
## me
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background
## jquery mobile

!SLIDE center adobe-background
## rubyists
#### kstewart.me/2012/04/21/ruby-at-adobe.html

!SLIDE image center
# Motivation

!SLIDE center awesome-background background-image
<h2 style="margin-top: 35%;">math: it's great</h2>

!SLIDE image center stats-background background-image
<h2>jquery: it's popular</h2>

!SLIDE center speed-background background-image
<h2 style="margin-top: 35%;">speed: it's fun</h2>

!SLIDE
# Method Chains

!SLIDE
<pre class="small">
jQuery( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="small">
jQuery( <span class="string">"div"</span> )
  <b>.hide()</b>
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="large">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
});
</pre>

!SLIDE
<pre class="large">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );</b>
});
</pre>

!SLIDE
<pre class="small">
jQuery( <span class="string">"div"</span> )
  .hide()
  <b>.addClass( <span class="string">"foo"</span> )</b>
  .show();
</pre>

!SLIDE
<pre>
$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
});
</pre>

!SLIDE
<pre>
$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
});
</pre>

!SLIDE
<pre class="small">
jQuery( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  <b>.show();</b>
</pre>

!SLIDE
<pre class="large">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
});
</pre>

!SLIDE
<pre class="large">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
});
</pre>

!SLIDE
<pre class="small">
jQuery( <span class="string">"div"</span> )
  <b>.hide()</b>
  <b>.addClass( <span class="string">"foo"</span> )</b>
  <b>.show();</b>
</pre>

!SLIDE
<pre class="large">
$divs.each(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
});</pre>

