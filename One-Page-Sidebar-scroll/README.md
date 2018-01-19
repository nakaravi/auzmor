jquery.onepage.scroll
=====================

jQuery Plugin for Navigation on SinglePage

This Plugin is still under development

##Quick Start

If you have installed Node.js and bower
```
$ git clone https://github.com/TimoGelhard/jquery.onepage.scroll.git
$ bower install
```

else:
```
- Download Zip.file
- Download jQuery
- Download jQuery.easing
```

##Include Plugin

In your Document you have to create multiple content areas with the same 
 class all in a container. Every content 'div' must have an 'id' so you can scroll to.
 
```
<div class="container">
    <div class="selector" id="content-1" data-title="Tooltip">
        Content
    </div>
    <div class="selector" id="content-2">
        <h3>Headline</h3>
        Content2
        .
        .
        .
</div>
```

so you can init the plugin

```javascript
$('.container').onePageScroll({
    sectionSelector: $('.selector')
});
```

##Plugin Settings

```javascript
$('.container').onePageScroll({
    //is an Element Class for the Content Parts as jQuery Selector 
    //jQuery selector (required)
    sectionSelector: $('.selector'),
    
    //set the Top referenz to set the "Aktiv Zone Beginning" of the content parts
    //integer (optional) default: 50
    topMargin: 50,
    
    //set the Top referenz from the height() value of the given element  
    //jQuery selector (optional)
    topElement: $('header'),
     
    //additional value that's added to topMargin to move the "Aktiv Zone Beginning" down
    //integer (optional) default: 10
    offsetAktiv: 10,
    
    //set the position of the navigation container
    //string 'right' or 'left' (optional) default: 'right' 
    position: 'right',
    
    //option to create navigation buttons on empty content section
    //boolean (optional) default: false
    emptyContent: false,
    
    //set the easing value for page scroll
    //string (optional) default: 'easeInOutQuart'
    ease: 'easeInOutQuart',
    
    //set the time of the scroll duration
    //integer (optional) default: 1000
    animationDuration: 1000,
    
    //activate key navigation to navigate with the page up and down buttons
    //boolean (optional) default: true
    keyNavigation: true,
  
    //activate the tooltips
    //default tooltip text from data-title="" attribute of content part
    //boolean (optional) default: true
    tooltip: true,
  
    //set the tooltip text from the html() value of an element
    //jQuery selector (optional) 
    tooltipSelector: $('h3'),
    
    //set the color of Tooltip
    //css value string (optional) default: '#ffffff'
    tooltipColor: '#ffffff',

    //set the background of the Tooltip
    //css value string (optional) default: rgba(0,0,0,0.8)
    tooltipBackground: 'rgba(0,0,0,0.8)',

    //set the border of the navigation container (normal css)
    //string css value (optional) default: '1px solid rgba(0,0,0,0.2)'
    borderNavigation: '1px solid red',
    
    //set the background of the navigation container
    //string css value (optional) default: 'rgba(80,80,80,0.6)'
    background: 'rgba(0,0,0,0.8)',
    
    //set the border radius or the navigation container
    //integer (optional) default: 10
    borderRadius: 10,
  
    //set the width of each navigation item
    //integer (optional) default: 40
    naviItemWidth: 40,

    //set the width of each navigation item
    //integer (optional) default: 30
    naviItemHeight: 30,
  
    //set the color of the navigation buttons
    //string css value (optional) default: '#c2c2c2'
    buttonColor: '#c2c2c2', 

    //set the color of the navigation button for aktiv content part
    //string css value (optional) default: '#ffffff'
    buttonColorAktiv: '#ffffff', 

    //set the width and height of the navigation buttons
    //integer (optional) default: 10    
    buttonSize: 10 ,

    //set the border of the navigation buttons
    //string css value (optional) default: '1px solid #ffffff'
    buttonBorder: '1px solid #ffffff',
  
    //set the border radius of the buttons
    //integer (optional) default: 6
    buttonBorderRadius: 6 
});
```



##Destroy Method

You can Destroy the Plugin with:

```javascript
    $('.container').onePageScrollDestroy()
```


##Responsive

That the Plugin is full responsive, be sure that you're index.html contains

```
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```

