var coll = document.getElementsByClassName("collapsible");

      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active-a");
          var content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.borderColor = 'transparent';
            // content.style.opacity = '0';
          } else {
            content.style.maxHeight = content.scrollHeight + 200 + "px";
            // content.style.opacity = '1';
            content.style.borderColor = '#ffffff9f';
            
            
          }
        });
      }