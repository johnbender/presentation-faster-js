!SLIDE link
<h1 style="font-size: 7em">
  Faster jQuery
  <!-- oh noes div inside h1 :P -->
  <div style="font-size: 0.6em; margin-top: 18px;">with</div>
  Category Theory
</h1>
<span style="font-size: 1.1em">johnbender.github.com/presentation-faster-js</span>

!SLIDE bullets mono-bullets
## me
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background background-image
## jquery mobile

!SLIDE center adobe-background background-image
## rubyists
#### kstewart.me/2012/04/21/ruby-at-adobe.html

!SLIDE image center
# Motivation

!SLIDE center awesome-background background-image
<h2 class="over-image" style="margin-top: 35%;">math: it's great</h2>

!SLIDE image center stats-background background-image
<h2 class="over-image" style="margin-top: 35%;">jquery: it's popular</h2>

!SLIDE center speed-background background-image
<h2 class="over-image" style="margin-top: 35%;">speed: it's sexy</h2>

!SLIDE
## method chains

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  <b>.hide()</b>
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide();</code></div>
<pre class="medium">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  .hide()
  <b>.addClass( <span class="string">"foo"</span> )</b>
  .show();
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" );</code></div>
<pre class="medium">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <span class="keyword">var</span> <span class="variable-name">old</span> = elem.getAttribute( <span class="string">"class"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo "</span> + old );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  <b>.show();</b></pre>

!SLIDE
<div class="file-name"><code>$( "div" ).show();</code></div>
<pre class="medium">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  <b>.hide()</b>
  <b>.addClass( <span class="string">"foo"</span> )</b>
  <b>.show();</b>
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide().addClass( "foo" ).show();</code></div>
<pre class="medium">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <span class="keyword">var</span> <span class="variable-name">old</span> = elem.getAttribute( <span class="string">"class"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo "</span> + old );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide().addClass( "foo" ).show();</code></div>
<pre class="medium">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <span class="keyword">var</span> <span class="variable-name">old</span> = elem.getAttribute( <span class="string">"class"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo "</span> + old );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});</pre>
<div class="gigantor red-smile">☹☹</div>


!SLIDE
# Category Theory

!SLIDE center background-image e-ml-background
<h2 class="over-image"  style="margin-top: 35%;">context: it's useful</h2>

!SLIDE center background-image e-ml-background
<h2 class="over-image names" style="margin-top: 35%;">
  <span style="float: left; margin-left: 40px;">Eilenberg</span>
  <span style="float: right; margin-right: 40px;">Mac Lane</span>
</h2>

!SLIDE
## category?

!SLIDE center image
<img src="category-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xxsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param">a</span> ) {
  <span class="keyword">return</span> a;
}
</pre>

!SLIDE center image
<img src="closed-composition.png" style="width: 80%; margin-top: 10%"></img>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <b><span class="js2-function-param">f</span>, <span class="js2-function-param">g</span></b> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param"><b>a</b></span> ) {
    <span class="keyword">return</span> f(g(<b>a</b>));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(<b>g(a)</b>);
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> <b>f(g(a))</b>;
  };
}
</pre>

!SLIDE
## Html

!SLIDE center image
<img src="ob-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div#sample"</span><span class="js2-magic-paren"> );</span>
</pre>

!SLIDE center image
<img src="hom-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre>
<span class="comment">// @param {HTMLElement} elem
// @returns {HTMLElement}</span>
<span class="keyword">function</span>( <span class="js2-function-param">elem</span> ) {
  <span class="keyword">return</span> elem;
};

</pre>

!SLIDE
<pre>
<span class="comment">// @param {HTMLElement} elem
// @returns {HTMLElement}
</span><span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}
</pre>


!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>


!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param">a</span> ) {
  <span class="keyword">return</span> a;
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param"><b>a</b></span> ) {
  <span class="keyword">return</span> <b>a</b>;
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param"><b>elem</b></span> ) {
  <span class="keyword">return</span> <b>elem</b>;
}
</pre>

!SLIDE center image
<img src="composition-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param">a</span>) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param"><b>a</b></span>) {
    <span class="keyword">return</span> f(g(<b>a</b>));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param"><b>elem</b></span>) {
    <span class="keyword">return</span> f(g(<b>elem</b>));
  };
}
</pre>

!SLIDE
## Jqry

!SLIDE center image
<img src="ob-jqry.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> );
</pre>

!SLIDE center image
<img src="hom-jqry.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.hide();</b>
</pre>

!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><b><span class="js2-external-variable">jQuery</span>.fn</b>.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> ).id();
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.id()</b>;
</pre>

!SLIDE center image
<img src="composition-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(g.apply(<span class="builtin">this</span>));
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <b><span class="js2-function-param">f</span>, <span class="js2-function-param">g</span></b> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(g.apply(<span class="builtin">this</span>));
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(g.apply(<span class="builtin"><b>this</b></span>));
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(<b>g.apply(<span class="builtin">this</span>)</b>);
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> <b>f.apply(g.apply(<span class="builtin">this</span>))</b>;
  };
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">jqG</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">jqF</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name"><b>jqG</b></span> = <b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span></b> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <b><span class="variable-name">jqF</span></b> = <b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span></b> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">jqG</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">jqF</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};
</pre>


!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( <b>jqF, jqG</b> );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn<b>.gf</b> = jQuery.cmps( jqF, jqG );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>


!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.g().f()</b>;

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.gf()</b>;
</pre>

!SLIDE center background-image
## functor

!SLIDE center image
<img src="functor.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE center image
<img src="functor-two-things.png" style="width: 95%; margin-top: 24%"></img>

!SLIDE center image
<img src="ob-html.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div"</span><span class="js2-magic-paren"> );</span>

<span class="comment">// {jQuery}</span>
$( document.querySelector(<span class="string">"div"</span><span class="js2-magic-paren">)</span> );
</pre>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div"</span><span class="js2-magic-paren"> );</span>

<span class="comment">// {jQuery}</span>
$( <b>document.querySelector(<span class="string">"div"</span><span class="js2-magic-paren">)</span></b> );
</pre>

!SLIDE center image
<img src="hom-html.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre>
<span class="comment">// @param {HTMLElement} elem</span>
<span class="comment">// @returns {HTMLElement}</span>
<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {HTMLDivElement}
</span>setFoo( sample );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).setFoo();
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {HTMLDivElement}
</span><b>setFoo( sample );</b>

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).setFoo();
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {HTMLDivElement}
</span>setFoo( sample );

<span class="comment">// {jQuery}
</span><b>$( <span class="string">"#sample"</span> ).setFoo();</b>
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="builtin">this</span>.map(<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <b><span class="builtin">this</span></b>.map(<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="builtin">this</span>.<b>map</b>(<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="builtin">this</span>.map(<span class="keyword">function</span> <span class="function-name"><b>setFoo</b></span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <b><span class="builtin">this</span>.map</b>(<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE center image
<img src="ob-hom-fns.png" style="width: 95%; margin-top: 24%"></img>

!SLIDE center image
<img src="composition.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( <b>jqF, jqG</b> );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span><b>.fn.gf</b> = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>


!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.gf();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.g().f();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.g().f();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> )<b>.map( cmps(f, g) );</b>
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( jqF, jqG );

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).g().f();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> )<b>.map( cmps(f, g) );</b>
</pre>

!SLIDE
# Meanwhile

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  <b>.hide()</b>
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> )
  <b>.addClass( <span class="string">"foo"</span> )</b>
  <b>.show();</b>
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});

$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <span class="keyword">return</span> elem;
});

$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>
<div class="gigantor red-smile">☹☹</div>


!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});

$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
<span class="keyword">function</span> <span class="function-name">g</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}

<span class="keyword">function</span> <span class="function-name">f</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
}
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});


$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword"><b>function</b></span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});


$( <span class="string">"div"</span> ).map( <b>cmps(f, g)</b> );
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword"><b>function</b></span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});


$( <span class="string">"div"</span> ).map( <b>cmps(f, g)</b> );
</pre>

<div class="gigantor green-smile">☺☺</div>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$( <span class="string">"div"</span> ).map(<span class="keyword"><b>function</b></span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});


$( <span class="string">"div"</span> ).map( <b>cmps(f, g)</b> );
</pre>
<div class="gigantor red-smile smaller">☺</div>

!SLIDE
## standard

!SLIDE center background-image facepalm-background
<h2 class="over-image" style="margin-top: 35%;">timing: it's everything</h2>

!SLIDE
<pre>
<span class="comment">// @returns {HTMLElement}</span>
<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}

<span class="comment">// @returns {jQuery}</span>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>.map( <span class="builtin">this</span>, setFoo );
};</pre>

!SLIDE
<pre>
<span class="comment">// @returns {HTMLElement}</span>
<span class="keyword">function</span> <span class="function-name"><b>setFoo</b></span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}

<span class="comment">// @returns {jQuery}</span>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>.map( <span class="builtin">this</span>, setFoo );
};</pre>

!SLIDE
<pre>
<span class="comment">// @returns {HTMLElement}</span>
<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}

<span class="comment">// @returns {jQuery}</span>
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">setFoo</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>.map( <span class="builtin">this</span>, <b>setFoo</b> );
};</pre>

!SLIDE
<pre class="small">
<span class="js2-external-variable">jQuery</span>.fn.setFoo.<b>composable</b>
</pre>

!SLIDE
<pre>
<span class="comment">// chained
</span>$( <span class="string">"div"</span> ).setFoo().doBar();

<span class="comment">//composable versions</span>
<span class="keyword">var</span> <span class="variable-name">foo</span> = jQuery.fn.setFoo.composable,
    <span class="variable-name">bar</span> = jQuery.fn.doBar.composable;

<span class="comment">//composed with one iteration
</span>$( <span class="string">"div"</span> ).map( cmps(foo,bar) );
</pre>

!SLIDE
<pre>
<span class="comment">// chained
</span>$( <span class="string">"div"</span> )<b>.setFoo().doBar();</b>

<span class="comment">//composable versions</span>
<span class="keyword">var</span> <span class="variable-name">foo</span> = jQuery.fn.setFoo.composable,
    <span class="variable-name">bar</span> = jQuery.fn.doBar.composable;

<span class="comment">//composed with one iteration
</span>$( <span class="string">"div"</span> ).map( cmps(foo,bar) );
</pre>

!SLIDE
<pre>
<span class="comment">// chained
</span>$( <span class="string">"div"</span> ).setFoo().doBar();

<span class="comment">//composable versions</span>
<span class="keyword">var</span> <span class="variable-name">foo</span> = jQuery.fn.setFoo.<b>composable</b>,
    <span class="variable-name">bar</span> = jQuery.fn.doBar.<b>composable</b>;

<span class="comment">//composed with one iteration
</span>$( <span class="string">"div"</span> ).map( cmps(foo,bar) );
</pre>

!SLIDE
<pre>
<span class="comment">// chained
</span>$( <span class="string">"div"</span> ).setFoo().doBar();

<span class="comment">//composable versions</span>
<span class="keyword">var</span> <span class="variable-name">foo</span> = jQuery.fn.setFoo.composable,
    <span class="variable-name">bar</span> = jQuery.fn.doBar.composable;

<span class="comment">//composed with one iteration
</span>$( <span class="string">"div"</span> ).map( <b>cmps(foo,bar)</b> );
</pre>

!SLIDE
<pre class="medium">
<span class="comment">// @returns {function(HTMLElement): HTMLElement}</span>
<span class="js2-external-variable">jQuery</span>.fn.setFoo.<span class="function-name">composable</span> = <span class="keyword">function</span>( <span class="js2-function-param">a</span>, <span class="js2-function-param">b</span> ){
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">elem</span> ){
    <span class="keyword">return</span> setFoo( a, b, elem );
  };
};
</pre>

!SLIDE
<pre class="medium">
<span class="comment">// @returns {function(HTMLElement): HTMLElement}</span>
<span class="js2-external-variable">jQuery</span>.fn.setFoo.<span class="function-name">composable</span> = <span class="keyword">function</span>( <b><span class="js2-function-param">a</span>, <span class="js2-function-param">b</span></b> ){
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">elem</span> ){
    <span class="keyword">return</span> setFoo( <b>a, b</b>, elem );
  };
};
</pre>


!SLIDE
## warning proxy
<span style="font-size: 1.3em">github.com/johnbender/jquery-lazy-proxy</span>

!SLIDE center
## reading
<p><span style="font-size: 1.3em">johnbender.us/?p=1613</span></p>
<p><span style="font-size: 1.3em">johnbender.us/?p=1682</span></p>

!SLIDE bullets mono-bullets>
# Thanks
* @johnbender
* johnbender.us
* github.com/johnbender
