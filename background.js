/**                                                                                
 * Returns a handler which will open a new window when activated.                  
 */                                                                                
function getClickHandler(){                                                        
return function(info, tab){                                                        
    source_url = tab.url
    if(source_url == info.srcUrl)
    {
        path_array = source_url.split('/');
        source_url = path_array[0] + "//" + path_array[2];
    }                                                                                         
    chrome.windows.create({                                                        
        "url": "http://mlkshk.com/tools/p?url=" + escape(info.srcUrl) + "&source_url=" + escape(source_url),               
        'type': 'popup'                                                             
    });                                                                            
                                                                                   
  };                                                                               
};                                                                                 
/**                                                                                
 * Create a context menu which will only show up for images.                       
 */                                                                                
chrome.contextMenus.create({                                                       
  "title" : "Save this image on MLKSHK",
  "type" : "normal",                                                               
  "contexts" : ["image"],                                                          
  "onclick" : getClickHandler()                                                    
});                                                                                
