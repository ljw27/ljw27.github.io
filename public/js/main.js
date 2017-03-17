$(function() {
	$(document)
	.off("click",".desk")
	.on("click",".desk",function(e) {
		var id = e.currentTarget.dataset.id;
		window.tableId = id;//桌号
		window.num = e.currentTarget.dataset.value;//桌子可容纳人数
		/*桌子状态数据*/
		if(!localStorage['table_' + id]) {
			var temp = {state:1,personNum:1};
			localStorage['table_' + id] = JSON.stringify(temp);
		}
		var state = JSON.parse(localStorage['table_' + id]);

		$("#myModal").modal("show");
		var documentWidth = window.screen.availWidth;
		var documentHeight = window.screen.availHeight;
		if(documentWidth < 960) {
			documentWidth < documentHeight && (documentHeight = documentWidth);
			$(".modal-dialog").css({width: documentWidth*0.8,height: documentHeight*0.8});
		}else {
			$(".modal-dialog").css({width: 500,height: 260});
		}
			letDivCenter(".modal-dialog");
		$("#myModalLabel").text(id + "桌");
		$('#personNum input:radio[value="' +  state.personNum +'"]').parent().addClass("active").siblings().removeClass("active");
		$('#state input:radio[value="' +  state.state +'"]').parent().addClass("active").siblings().removeClass("active");

	})
	.off("click","#confirm")
	.on("click","#confirm",function() {
		/*占用状态*/
		if($('#state .active input:radio').val() == "2") {
			if(!localStorage['table_' + window.tableId]) {
				var temp = {
					state:2,
					personNum:$('#personNum .active input:radio').val()
				};
				localStorage['table_' + window.tableId] = JSON.stringify(temp);
			}else{
				var state = JSON.parse(localStorage['table_' + window.tableId]);
				state.state = 2;
				state.personNum = $('#personNum .active input:radio').val();
				localStorage['table_' + window.tableId] = JSON.stringify(state);
			}
			$(".desk[data-id='"+ window.tableId +"']").removeClass('empty_'+window.num).addClass('occupy_'+window.num);

			/*结束状态-数据存储*/
		}else if($('#state .active input:radio').val() == "3") {
			var time = getTime(new Date(),false);
			if(!localStorage[time]) {
				var temp = {
					time:getTime(new Date(),true),
					personNum:$('#personNum .active input:radio').val()
				};

				var data = [temp];
				var dataobj = {};
				dataobj[window.tableId] = data;

				localStorage[time] = JSON.stringify(dataobj);
			}else{
				var dataAll = JSON.parse(localStorage[time]);
				var temp = {
					time:getTime(new Date(),true),
					personNum:$('#personNum .active input:radio').val()
				};
				!dataAll[tableId] && (dataAll[tableId] = []);
				dataAll[tableId].push(temp);

				localStorage[time] = JSON.stringify(dataAll);
			}
			$(".desk[data-id='"+ window.tableId +"']").removeClass('occupy_'+window.num).addClass('empty_'+window.num);
				var state = JSON.parse(localStorage['table_' + window.tableId]);
				state.state = 1;
				localStorage['table_' + window.tableId] = JSON.stringify(state);
		}else{
			var state = JSON.parse(localStorage['table_' + window.tableId]);
			state.state = 1;
			state.personNum = $('#personNum .active input:radio').val();
			localStorage['table_' + window.tableId] = JSON.stringify(state);
			$(".desk[data-id='"+ window.tableId +"']").removeClass('occupy_'+window.num).addClass('empty_'+window.num);
			$("#myModal").modal("hide");
		}

		$("#myModal").modal("hide");
	})
	.off("click","#searchTotal")
	.on("click","#searchTotal", function() {
		var dateId = $("#dateId").val();
		statisticsTotal(dateId);
	})
	.off("click","#dataExport")
	.on("click","#dataExport",function() {
		dataExport();
	});


	initalState();

});

function getTime(date,more) {
	if(more) {
		var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var today = date.getDate();
    var hour = date.getHours();
    var minut = date.getMinutes();
    month < 10 && (month = '0' + month);
    today < 10 && (today = '0' + today);
  return year + "-" + month + "-" + today +":"+ hour + "-"+ minut;
	}else {
		var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var today = date.getDate();
    month < 10 && (month = '0' + month);
    today < 10 && (today = '0' + today);
  return year + "-" + month + "-" + today;
	}
}

function initalState() {
	var tableList = $(".desk");
	$.each(tableList,function(i,n) {
		var tableId = n.dataset.id;
		var num = n.dataset.value;
		if(localStorage['table_' + tableId]) {
			var state = JSON.parse(localStorage['table_' + tableId]);
			if(state.state == 2) {
				$(".desk[data-id='"+ tableId +"']").removeClass('empty_'+ num).addClass('occupy_'+ num);
			}
		}
	})
}

function statisticsTotal(date) {
	if(!localStorage[date]) {return};
	var item = JSON.parse(localStorage[date]);
	var allData = [];
	for(var i in item) {
		var tableId = i;
		var allNum = 0;//使用人数
		var allTimes = 0;//使用频率

		$.each(item[i], function(ii,nn) {
			allTimes += 1;
			allNum += parseFloat(nn.personNum);
		})
		var temp = {
			tableId:tableId,
			allNum: allNum,
			allTimes: allTimes
		};
		allData.push(temp);
	}
	allData.sort(function(num1,num2) {
		return parseFloat(num1.tableId) - parseFloat(num2.tableId);
	});


	var totalallNum = 0;
	var totalallTimes = 0;
	$.each(allData,function(i,n) {
		totalallNum += n.allNum;
		totalallTimes += n.allTimes;
	});
	window.allData = allData;

	var html = renderTemplate("statisticsPanel",{data:allData,totalallNum:totalallNum,totalallTimes:totalallTimes});
	$("#statistics").html(html);

}


function renderTemplate(id, data, holder) {
  if (!holder && typeof(holder) !== 'object')
    holder = {};
  var snippet = id;
  if (snippet[0] !== '<' || !snippetRegEx.test(snippet))
    snippet = this.findSnippetById(snippet);
  var render = holder[id] || template.compile(snippet);
  holder[id] = render;
  var element = render(data).trim();
  return $(element);
}

function findSnippetById(id) {
  var selector = 'script[type="text/html"]#' + id;
  return document.head.querySelector(selector).innerHTML;
}

function dataExport() {
  var data = "桌号,使用频次,总人数";

  $.each(window.allData,function(i,n) {
      data += ('\n' + n.tableId + "," + n.allTimes + "," + n.allNum);
  });
  var dateId = $("#dateId").val();

  var filename = dateId + '.xls';
  var format = 'application/vnd.ms-excel;charset=charset=utf-8';

  SaveAsFile(data,filename,format);
}

function SaveAsFile(data,filename,format) {
  try {
    var exportContent = "\uFEFF";
    var b = new Blob([exportContent+data],{type:format});
    saveAs(b, filename);
  } catch (e) {
    console.log(e);
  }
}

function letDivCenter(divName){
  var top = ($(window).height() - $(divName).height())/2;
  var left = ($(window).width() - $(divName).width())/2;
  var scrollTop = $(document).scrollTop();
  var scrollLeft = $(document).scrollLeft();
  console.log("top:"+ top +","+ "left:"+left);
  console.log("scrollTop:"+scrollTop+","+"scrollLeft"+scrollLeft);
  $(divName).css( { position : 'absolute', top : scrollTop + top, left : scrollLeft + left,marginTop: 0 ,maxWidth:500,maxHeight:260} );
}
