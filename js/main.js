$(document).ready(function(){
      $(".parent").click(function () {
            $(".child").prop("checked", this.checked);
      });
      $(".child").click(function(){
          if($(".child:checked").length>0) {
              $(".parent").prop("checked", "checked");
          } else {
              $(".parent").prop("checked",this.checked);
          }
    });
});
