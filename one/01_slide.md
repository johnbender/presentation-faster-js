!SLIDE link
<h1 style="font-size: 7em">
  Faster jQuery
  <!-- oh noes div inside h1 :P -->
  <div style="font-size: 0.6em; margin-top: 18px;">with</div>
  Catego<span class="ry-kern">ry</span> Theo<span class="ry-kern">ry</span>
</h1>
johnbender.github.com/presentation-faster-js

!SLIDE bullets mono-bullets
## me
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background background-image
## jque<span class="ry-kern">ry</span> mobile

!SLIDE center adobe-background background-image
## rubyists
#### kstewart.me/2012/04/21/ruby-at-adobe.html

!SLIDE image center
# Motivation

!SLIDE center awesome-background background-image
<h2 class="over-image" style="margin-top: 35%;">math: it's great</h2>

!SLIDE image center stats-background background-image
<h2 class="over-image" style="margin-top: 35%;">jque<span class="ry-kern">ry</span>: it's popular</h2>

!SLIDE center speed-background background-image
<h2 class="over-image" style="margin-top: 35%;">speed: it's sexy</h2>

!SLIDE
## jquery methods

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "div" );

!SLIDE xsmall
    @@@ javascript
    // {jQuery}
    $( "div" ).foo();


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
    jQuery.fn.foo = function() {
      this.~~~map/~~~(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function() {
      this.map(function( i, ~~~elem/~~~ ) {
        // alter the HTMLElement
      });

      return this;
    };

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function() {
      this.map(function( i, elem ) {
        ~~~// alter the HTMLElement/~~~
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
      this.map(function( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };
<div class="gigantor red-smile">☹☹</div>

!SLIDE

# Catego<span class="ry-kern">ry</span> Theo<span class="ry-kern">ry</span>

!SLIDE center background-image e-ml-background
<h2 class="over-image"  style="margin-top: 35%;">context: it's useful</h2>

!SLIDE center background-image e-ml-background
<h2 class="over-image names" style="margin-top: 35%;">
  <span style="float: left; margin-left: 40px;">Eilenberg</span>
  <span style="float: right; margin-right: 40px;">Mac Lane</span>
</h2>

!SLIDE
## catego<span class="ry-kern">ry</span>?

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

!SLIDE center background-image
## Functor

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

!SLIDE
<pre>
jQuery.fn.<span class="function-name">gf</span> = jQuery.cmps(
  jQuery.fn.f,
  jQuery.fn.g
);

<span class="comment">// use the map in f,g then compose</span>
$( <span class="string">"div"</span> ).g().f();

<span class="comment">// compose first then use map
</span>$( <span class="string">"div"</span> )<b>.map( cmps(f, g) );</b>
</pre>

!SLIDE
# Jq<span class="ry-kern">ry</span><sub>h</sub>

!SLIDE image
![jquery_h](jquery_h.png)

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
      this.map(~~~function/~~~( i, elem ) {
        // alter the HTMLElement
      });

      return this;
    };

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
      this.map(foo);
      return this;
    };

<div class="gigantor red-smile">☹☹</div>

!SLIDE medium
    @@@ javascript
    // @returns {jQuery}
    jQuery.fn.foo = function( a, b ) {
      this.map(foo);
      return this;
    };

<div class="gigantor purple-smile">☺☺</div>


!SLIDE
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

!SLIDE
## loop fusion

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
      jQuery.removeAttr( elem, "foo" )
      jQuery.removeAttr( elem, "bar" );
    });

!SLIDE medium
    @@@ javascript
    // single loop with html morphism
    $( "div" ).each(function( i, elem ) {
      ~~~jQuery.removeAttr( elem, "foo" )/~~~
      ~~~jQuery.removeAttr( elem, "bar" );/~~~
    });


!SLIDE center image
<img src="composition.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE image
<div class="file-name"><code>$( "div" ).removeAttr( "foo" ).removeAttr( "bar" );</code></div>
<img src="stats.png" class="stats" style="top: 100px"></img>

!SLIDE
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

!SLIDE
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


!SLIDE
### git.io/q6JDhA

!SLIDE
## core

!SLIDE large
    @@@ javascript
    // jQuery 1.8
    var a;

    a = document.createElement( "div" );

    $( ".test" ).append( a );

!SLIDE large
    @@@ javascript
    // Abstracted Core 1.8
    var set = $( ".test" ), l, a;

    l = set.length;
    a = document.createElement( "div" );

    while( l-- ) {
      append( set[l], a );
    }


!SLIDE
!SLIDE image
<div class="file-name"><code>$( ".test" ).append(document.createElement( "div" ));</code></div>
<img src="append-core.png" class="stats"></img>

!SLIDE
# Wield



!SLIDE
## reading
johnbender.us/tags.html#math-ref

!SLIDE bullets mono-bullets>
# Thanks
* @johnbender
* johnbender.us
* github.com/johnbender
