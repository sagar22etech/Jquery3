$(document).ready(function(){
  $('input[type="checkbox"]').change(function() {

         var checked = $(this).prop("checked"),
             parentelem = $(this).parent();

         parentelem.find('input[type="checkbox"]').prop({
             checked: checked
         });
          checkSubchild(parentelem);
         function checkSubchild(check) {
             var parent = check.parent().parent(),
                 flag = false;

             check.siblings().each(function() {
                 return flag = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
             });
             if (flag && checked) {
                 parent.children('input[type="checkbox"]').prop("checked", checked);
             } else if (flag && !checked) {
                 parent.children('input[type="checkbox"]').prop("checked", checked);
             } else {
                 check.parents("li").children('input[type="checkbox"]').prop({
                     checked: true
                 });
             }
         }
     });
});
