"use strict";

var PROXY_URL="feed_proxy.php?filename=";
var AMAZON_URL="http://rssfeeds.s3.amazonaws.com/goldbox";
var EBAY_URL="http://deals.ebay.com/feeds/rss";

$(function()
{
$('#getADeals').on('click', function(event) {
		getAmazonDeals();
	});
$('#getEDeals').on('click', function(event) {
		getEbayDeals();
	});

});

function getAmazonDeals(){

	$.ajax(
	{
			type: "GET",
			url: PROXY_URL + AMAZON_URL,
			dataType: "xml",
			success:function(xml){onLoadedAmazon(xml);}
	});
}

function getEbayDeals(){
	$.ajax(
	{
			type: "GET",
			url: PROXY_URL + EBAY_URL,
			dataType: "xml",
			success:function(xml){onLoadedEbay(xml);}
	});
}

function onLoadedAmazon(xml){
	$('#cards').html("");
	
	var firstTitle = $(xml).find('title').first().text();
	
	$('#cards').append("<h2>" + firstTitle + "</h2>");
	$('#cards').append("<p>Fetched URL=" + AMAZON_URL + "</p>");
	
	
	var title,description,link;
	$(xml).find('item').each(function(){
		
		title = $(this).find('title').text();		
		link = $(this).find('link').text();
		description = $(this).find('description').text();
		
	
		var html = "<div class='item'>";
		html += "<h3>" + title  + "</h3>\n";
		html += "<p><a href='" + link + "'>Link to deal!</a></p>";
		html += "<p>" + description + "</p>";		
		html += "</div>";
		html += "<hr />";
	
	
	$('#cards').append(html);
	
	});
	
	$('#cards').hide();
	$('#cards').fadeIn();
	
}

function onLoadedEbay(xml){
	$('#cards').html("");
	
	var firstTitle = $(xml).find('title').first().text();
	
	$('#cards').append("<h2>" + firstTitle + "</h2>");
	$('#cards').append("<p>Fetched URL=" + EBAY_URL + "</p>");
	
	
	var title,image,link;
	$(xml).find('entry').each(function(){
		
		title = $(this).find('title').text();		
		link = $(this).find('link').attr('href');
		image = $(this).find('img').attr('src');

		new Card({ image: image, link: link, price: 50, desc: "34234234", title: title });
	
	});
	
	$('#cards').hide();
	$('#cards').fadeIn();
	
}

jQuery.XMLtoStr = function(xmlData) {
  if (window.ActiveXObject) {
    return xmlData.xml;
  } else {
    return (new XMLSerializer()).serializeToString(xmlData);
  }
}