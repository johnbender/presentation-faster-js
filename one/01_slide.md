!SLIDE link center background-image fast-background
<h1 style="font-size: 7em">
  Faster jQuery
  <!-- oh noes div inside h1 :P -->
  <div style="font-size: 0.6em; margin-top: 18px;">with</div>
  Catego<span class="ry-kern">ry</span> Theo<span class="ry-kern">ry</span>
</h1>
johnbender.us/presentation-faster-js

!SLIDE bullets mono-bullets
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background background-image
## jque<span class="ry-kern">ry</span> mobile


!SLIDE center background-image motivated-background
# motivation

!SLIDE center awesome-background background-image
<h2 class="over-image" style="margin-top: 35%;">math: it's great</h2>

!SLIDE image center stats-background background-image
<h2 class="over-image" style="margin-top: 35%;">jque<span class="ry-kern">ry</span>: it's popular</h2>

!SLIDE center speed-background background-image
<h2 class="over-image" style="margin-top: 35%;">speed: it's sexy</h2>

!SLIDE center background-image jquery-background
## jquery

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "div" );

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "div" ).foo();

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "div" ).foo().bar();

!SLIDE
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function() {
      // manipulate this
      return this;
    };

!SLIDE
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.~~~foo/~~~ = function() {
      // manipulate this
      return this;
    };

!SLIDE
    @@@ javascript
    // @returns {jQuery}
    ~~~jQuery.fn/~~~.foo = function() {
      // manipulate this
      return this;
    };

!SLIDE
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function() {
      // manipulate this
      return ~~~this/~~~;
    };

!SLIDE
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function() {
      ~~~// manipulate this/~~~
      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( ~~~a, b/~~~ ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.~~~map/~~~(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        ~~~// alter the HTMLElement/~~~
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };
<div class="gigantor red-smile">☹</div>

!SLIDE center background-image math-background
# catego<span class="ry-kern">ry</span> Theo<span class="ry-kern">ry</span>

!SLIDE center background-image e-ml-background
<h2 class="over-image"  style="margin-top: 35%;">context: it's useful</h2>

!SLIDE center background-image e-ml-background
<h2 class="over-image names" style="margin-top: 35%;">
  <span style="float: left; margin-left: 40px;">Eilenberg</span>
  <span style="float: right; margin-right: 40px;">Mac Lane</span>
</h2>

!SLIDE center background-image e-ml-silly-background
<h2 class="over-image names" style="margin-top: 35%;">
  <span style="float: left; margin-left: 40px;">Eilenberg</span>
  <span style="float: right; margin-right: 40px;">Mac Lane</span>
</h2>

!SLIDE center background-image category-background
## catego<span class="ry-kern">ry</span>

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

!SLIDE center background-image html-background
## Html

!SLIDE center image
<img src="ob-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE medium
    @@@javascript
    // {HTMLElement}
    document.querySelector( "#sample" );

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

!SLIDE center background-image jquery-background
## Jq<span class="ry-kern">ry</span>

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

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "#sample" ).id();

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "#sample" ).~~~id()/~~~;

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    ~~~$( "#sample" )/~~~.id();

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
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span></b> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span></b> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};

<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span>jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span>jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  <b>jQuery.fn.f,</b>
  <b>jQuery.fn.g</b>
);

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span>jQuery.fn.<b>gf</b> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span>jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>


!SLIDE
<pre>
<span class="comment">// @returns {jQuery}</span>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.g().f()</b>;

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.gf()</b>;
</pre>

!SLIDE center background-image horror-background
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
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  <b>jQuery.fn.f,</b>
  <b>jQuery.fn.g</b>
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
jQuery.fn.<span class="function-name"><b>gf</b></span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).gf();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>


!SLIDE
<pre>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.gf();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.g().f();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> ).map( cmps(f, g) );
</pre>

!SLIDE
<pre>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> )<b>.g().f();</b>

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> )<b>.map( cmps(f, g) );</b>
</pre>

!SLIDE center background-image hug-background
## Html ♥ Jqry

!SLIDE center image
<img src="functor.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE center image
<img src="hom-jqry.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE center image
<img src="jquery_h-morphisms.png" style="margin-top: 30%"></img>

!SLIDE center image
<img src="silly-rel.png" style="margin-top: 30%"></img>

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    ~~~jQuery.fn.foo/~~~ = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.~~~map/~~~(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        ~~~// alter the HTMLElement/~~~
      });

      return this;
    };

!SLIDE
<table>
  <tr>
		<td>addClass</td>
		<td>after</td>
		<td class="last">append</td>
	</tr>
  <tr>
		<td>appendTo</td>
		<td>attr</td>
		<td class="last">before</td>
	</tr>
  <tr>
		<td>empty</td>
		<td>html</td>
		<td class="last">prepend</td>
	</tr>
  <tr>
		<td>prependTo</td>
		<td>prop</td>
		<td class="last">remove</td>
	</tr>
  <tr>
		<td>text</td>
		<td>unwrap</td>
		<td class="last">val</td>
	</tr>
  <tr>
		<td>width</td>
		<td>wrap</td>
		<td class="last">wrapAll</td>
	</tr>
</table>

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( ~~~a, b/~~~ ) {
      this.~~~map/~~~(function( i, elem ) {
        ~~~// alter the HTMLElement/~~~
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

<div class="gigantor red-smile">☹</div>

!SLIDE center image
<img src="functor.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
    @@@ javascript
    // @returns {HTMLElement}
    function foo( i, elem ) {
      // alter the HTMLElement
      return elem;
    }

!SLIDE
    @@@ javascript
    // @returns {HTMLElement}
    function foo( i, ~~~elem/~~~ ) {
      // alter the HTMLElement
      return ~~~elem/~~~;
    }

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(foo);
      return this;
    };


!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( ~~~a, b/~~~ ) {
      this.map(foo);
      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      ~~~this.map/~~~(foo);
      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(~~~foo/~~~);
      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(foo);
      return this;
    };

<div class="gigantor purple-smile">☺</div>

!SLIDE center background-image fist-bump-background
<h1 style="margin-top: 40%; opacity: 0.88">upshot</h1>

!SLIDE center background-image wrap-background
## rewrap

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    $( "a" ).click(function( event ) {
      // invoke foo on click target
      $( event.target ).foo();
    });

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    $( "a" ).click(function( event ) {
      // invoke foo on click target
      $( ~~~event.target/~~~ ).foo();
    });

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    $( "a" ).click(function( event ) {
      // invoke foo on click target
      $( event.target ).~~~foo()/~~~;
    });

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    $( "a" ).click(function( event ) {
      // invoke foo on click target
      foo( event.target );
    });

!SLIDE center background-image fusion-background
## fusion

!SLIDE center image
<img src="composition.png" style="margin-top: 30%"></img>

!SLIDE medium
    @@@ javascript
    // two loops with chaining
    $( "div" )
      .removeAttr( "foo" )
      .removeAttr( "bar" );

!SLIDE medium
    @@@ javascript
    // two loops with chaining
    $( "div" )
      ~~~.removeAttr( "foo" )/~~~
      ~~~.removeAttr( "bar" );/~~~

!SLIDE medium
    @@@ javascript
    // single loop with html morphism
    $( "div" ).each(function( i, elem ) {
      removeAttr( elem, "foo" );
      removeAttr( elem, "bar" );
    });

!SLIDE medium
    @@@ javascript
    // single loop with html morphism
    $( "div" ).each(function( i, elem ) {
      ~~~removeAttr( elem, "foo" );/~~~
      ~~~removeAttr( elem, "bar" );/~~~
    });


!SLIDE image
<div class="file-name"><code>$( "div" ).removeAttr( "foo" ).removeAttr( "bar" );</code></div>
<img src="stats.png" class="stats" style="top: 100px"></img>

!SLIDE center background-image invocation-background
## invocation

!SLIDE
    @@@ javascript
    // chained
    $( "div" )
      .removeAttr( "foo" )
      .removeAttr( "bar" );

!SLIDE
    @@@ javascript
    // string parsing
    $( "div" )
      .removeAttr( "foo bar" );

!SLIDE image
<div class="file-name"><code>$( "div" ).removeAttr( "foo" ).removeAttr( "bar" );</code></div>
<img src="removeattr-unfriendly.png" class="stats"></img>

!SLIDE center background-image dogfood-background
## dogfood

!SLIDE large
    @@@ javascript
    function replaceWith( e, val ) {
      if ( e.nextSibling ) {
        before( e.nextSibling, value );
      } else {
        append( e.parentNode, value );
      }

      remove( e );
    }

!SLIDE large
    @@@ javascript
    function replaceWith( e, val ) {
      if ( e.nextSibling ) {
        ~~~before( e.nextSibling, value )/~~~;
      } else {
        append( e.parentNode, value );
      }

      ~~~remove( e )/~~~;
    }

!SLIDE large
    @@@ javascript
    function replaceWith( e, val ) {
      if ( e.nextSibling ) {
        before( e.nextSibling, value );
      } else {
        ~~~append( e.parentNode, value )/~~~;
      }

      ~~~remove( e )/~~~;
    }

!SLIDE image
<div class="file-name"><code>$( ".test" ).replaceWith( "&lt;div&gt;&lt;/div&gt;" );</code></div>
<img src="replacewith-split.png" class="stats"></img>


!SLIDE center background-image core-background
## core

!SLIDE large
    @@@ javascript
    // jQuery 1.8
    var a = document.createElement( "div" );

    // Timed operation
    $( ".test" ).append( a );

!SLIDE large
    @@@ javascript
    // jQuery 1.8
    var a = document.createElement( "div" );

    // Timed operation
    ~~~$( ".test" ).append( a );/~~~

!SLIDE large
    @@@ javascript
    // Abstracted Core 1.8
    var set = $( ".test" ), l, a;

    l = set.length;
    a = document.createElement( "div" );

    // Timed operation
    while( l-- ) { append( set[l], a ); }

!SLIDE large
    @@@ javascript
    // Abstracted Core 1.8
    var set = $( ".test" ), l, a;

    l = set.length;
    a = document.createElement( "div" );

    // Timed operation
    while( l-- ) { ~~~append( set[l], a );/~~~ }

!SLIDE large
    @@@ javascript
    // Abstracted Core 1.8
    var set = $( ".test" ), l, a;

    l = set.length;
    a = document.createElement( "div" );

    // Timed operation
    while( l-- ) { append( ~~~set[l]/~~~, a ); }


!SLIDE
!SLIDE image
<div class="file-name"><code>jQuery.fn.append vs while(){ jQuery.append } </code></div>
<img src="append-core.png" class="stats"></img>

!SLIDE center background-image dual-wield-background
<h1 style="margin-top: 30%; opacity: 0.9">wield</wield>

!SLIDE image center full
![jquery fork](wield-github.png)

!SLIDE image center full
![jquery fork](wield-github-private.png)

!SLIDE center background-image focus-background
## focused

!SLIDE large
    @@@ javascript
    function empty( e ) {
      // remove all child nodes
      while ( e.firstChild ) {
        e.removeChild( e.firstChild );
      }

      return e;
    };

!SLIDE large
    @@@ javascript
    function empty( e ) {
      // remove all child nodes
      while ( e.firstChild ) {
        e.removeChild( e.firstChild );
      }

      ~~~return e;/~~~
    };

!SLIDE center background-image functional-background
## functional

!SLIDE medium
    @@@ javascript
    // standalone
    Wield.Methods.empty( elem );

    // or as an instantiated object
    var wield = Wield.Dom( elem );

    // chains supported
    wield.empty().empty();

    // or as a selected object
    Wield.Dom.find( "#sample" ).empty();

!SLIDE medium
    @@@ javascript
    // standalone
    ~~~Wield.Methods.empty( elem );/~~~

    // or as an instantiated object
    var wield = Wield.Dom( elem );

    // chains supported
    wield.empty().empty();

    // or as a selected object
    Wield.Dom.find( "#sample" ).empty();

!SLIDE medium
    @@@ javascript
    // standalone
    Wield.Methods.empty( elem );

    // or as an instantiated object
    var wield = ~~~Wield.Dom( elem );/~~~

    // chains supported
    wield.empty().empty();

    // or as a selected object
    Wield.Dom.find( "#sample" ).empty();

!SLIDE medium
    @@@ javascript
    // standalone
    Wield.Methods.empty( elem );

    // or as an instantiated object
    var wield = Wield.Dom( elem );

    // chains supported
    ~~~wield.empty().empty();/~~~

    // or as a selected object
    Wield.Dom.find( "#sample" ).empty();

!SLIDE medium
    @@@ javascript
    // standalone
    Wield.Methods.empty( elem );

    // or as an instantiated object
    var wield = Wield.Dom( elem );

    // chains supported
    wield.empty().empty();

    // or as a selected object
    ~~~Wield.Dom.find( "#sample" ).empty();/~~~

!SLIDE center background-image modular-background
## modular

!SLIDE bash
    @@@ bash
    ~~~*wield/*~~~ ~~~@master/@~~~ ⎇  ls src/methods/
    after.js   before.js  prepend.js   replacewith.js
    all.js     empty.js   prop.fix.js  text.js
    append.js  html.js    prop.js      unwrap.js
    attr.js    misc.js    remove.js    wrap.js

!SLIDE bash
    @@@ bash
    ~~~*wield/*~~~ ~~~@master/@~~~ ⎇  ls src/methods/
    after.js   before.js  prepend.js   replacewith.js
    ~~~all.js/~~~     empty.js   prop.fix.js  text.js
    append.js  html.js    prop.js      unwrap.js
    attr.js    ~~~misc.js/~~~    remove.js    wrap.js

!SLIDE center background-image tested-background
## tested

!SLIDE image center full
![jquery fork](jquery-fork.png)

!SLIDE image center full
![jquery fork](jquery-fork-branch.png)

!SLIDE center background-image small-background
## small


!SLIDE bash
    @@@ bash
    ~~~*wield/*~~~ ~~~@master/@~~~ ⎇  grunt build
    Running "compile" task

    ...

    Running "min:dist" (min) task
    File "compiled/wield.min.js" created.
    Uncompressed size: 13623 bytes.
    Compressed size: ~~~1507 bytes/~~~ gzipped.

    Running "min:jquery" (min) task
    File "compiled/wield.jquery.min.js" created.
    Uncompressed size: 9307 bytes.
    Compressed size: 1240 bytes gzipped.

    Done, without errors.

!SLIDE bash
    @@@ bash
    ~~~*wield/*~~~ ~~~@master/@~~~ ⎇  grunt build
    Running "compile" task

    ...

    Running "min:dist" (min) task
    File "compiled/wield.min.js" created.
    Uncompressed size: 13623 bytes.
    Compressed size: 1507 bytes gzipped.

    Running "min:jquery" (min) task
    File "compiled/wield.jquery.min.js" created.
    Uncompressed size: 9307 bytes.
    Compressed size: ~~~1240 bytes/~~~ gzipped.

    Done, without errors.

!SLIDE center background-image more-background
# more

!SLIDE center background-image wield-background
### git.io/l9KYEg

!SLIDE center background-image blog-background
### johnbender.us

!SLIDE center background-image app-cat-github-background
### git.io/q6JDhA

!SLIDE bullets mono-bullets
### thanks
* @johnbender
* johnbender.us
* github.com/johnbender
