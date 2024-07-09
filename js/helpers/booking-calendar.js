jQuery("#divServiceDate").datetimepicker({
  format: "y/m/d ",
  inline: true,
  timepicker: false,
  onChangeDateTime: function (dp, $input) {
    let date = new Date(dp);
    $("#serviceDate").val(
      `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`
    );
  },
  onGenerate: function (ct) {
    let date = new Date(ct);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    $(".xdsoft_monthpicker .date-my").text(
      `${months[date.getMonth()]} ${date.getFullYear()} `
    );
  }
});
$(".xdsoft_monthpicker").append(`<div class='date-my' ></div>`);
