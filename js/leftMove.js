$(function () {
	$("input").val(""); //for Firefox 加载后清空输入框
	//数据准备？？有别的办法吗？
	var class1_gra = [100,100,67,95,100,80,85,82,98,75,98,95,75,98,
					  100,88,94,85,80,84,66,74,83,100,85,70,32,48];
	var class2_gra = [95,92.5,95,95,100,93,75.5,95,88,71,93,97,90,86.5,
					  86,84,86.5,99,67,76,72,85.5,90,81,76,78,47,59.5];
	var class3_gra = [75,70,97,80,80,57,95,75,100,75,95,78,70,73,78,83,
					  100,78,89,50,80,76,91,86,81,80,100,42];
	var class4_gra = [94,60,87,92,100,88,69,97,91,65,86,96,83,48,
					  93,92,82,84,87,87,87,78,94,75,83,0,57,84];


	$Lconfirm = $(".stu_num button").click(function () {
		var stu_num = $(this).siblings().val();
		var num = getNum(stu_num);
		//console.log(num);
		if("undefined" == typeof num) {
			alert("请输入正确的学号");
			//清空输错的学号
			$(this).siblings().val("");
			return false;
		}
		/*---------------------------学生成绩-------------------------------*/
		var stu_name = getName(stu_num);
		$('.stu_gra').text(/*"学生姓名：" + stu_name + " " + */
							"各科成绩："+ class1_gra[num] + " " +
							class2_gra[num] + " " + class3_gra[num] +
							" " + class4_gra[num]);
		console.log(stu_name);

		/*--------------------------class1高数------------------------------*/
		LshowPercent("allClass1",class1_gra,num);

		/*--------------------------class2力学------------------------------*/
		LshowPercent("allClass2",class2_gra,num);

		/*--------------------------class3线代------------------------------*/
		LshowPercent("allClass3",class3_gra,num);

		/*--------------------------class4计概------------------------------*/
		LshowPercent("allClass4",class4_gra,num);

		/*
		//class1高数
		//计算排名
		var count1 = 1;
		for (var i = 0; i < class1_gra.length; i++) {
			if (class1_gra[i] > class1_gra[num] ) {
				count1++;
			}
		}
		// console.log(class1_gra.length);
		// console.log(count1);
		//计算百分比 保留两位小数
		var per1 = (((class1_gra.length - count1 + 1) / class1_gra.length) * 100 ).toFixed(2) ;
		//console.log(per1);                       //去掉的话无法实现保留两位小数？？？
		var width1 = per1 * 3 + 'px';   //总长度300px

		//console.log(per1);
		//console.log(width1);

		$('.allClass1 div').animate({'width': width1},1000);
		var offset1 = $('.allClass1 div').offset().left;
		// if ($('.allClass1:eq(2)')) {
		// 	$('.allClass1 span:eq(0)').remove();
		// }
		//per1 = per1 + '%';
		// $('.allClass1').append("<span>"+per1+"</span>");
		$('.allClass1 span').text(per1 + '%');
		$('.allClass1:eq(2)').css({'left':offset1+'px'});

		//class2力学

		var count2 = 1;
		for (var i = 0; i < class2_gra.length; i++) {
			if (class2_gra[i] > class2_gra[num] ) {
				count2++;
			}
		}
		var per2 = (((class2_gra.length - count2 + 1) / class2_gra.length) * 100 ).toFixed(2) ;
		//console.log(per1);                       //去掉的话无法实现保留两位小数？？？
		var width2 = per2 * 3 + 'px';   //总长度300px

		$('.allClass2 div').animate({'width': width2},1000);
		var offset2 = $('.allClass2 div').offset().left;
		// if ($('.allClass1:eq(2)')) {
		// 	$('.allClass1 span:eq(0)').remove();
		// }
		//per1 = per1 + '%';
		// $('.allClass1').append("<span>"+per1+"</span>");
		$('.allClass2 span').text(per2 + '%');
		$('.allClass2:eq(2)').css({'left':offset2+'px'});


		//class3线代
		var count3 = 1;
		for (var i = 0; i < class3_gra.length; i++) {
			if (class3_gra[i] > class3_gra[num] ) {
				count3++;
			}
		}
		var per3 = (((class3_gra.length - count3 + 1) / class3_gra.length) * 100 ).toFixed(2) ;
		//console.log(per1);                       //去掉的话无法实现保留两位小数？？？
		var width3 = per3 * 3 + 'px';   //总长度300px

		$('.allClass3 div').animate({'width': width3},1000);
		var offset3 = $('.allClass3 div').offset().left;
		// if ($('.allClass1:eq(2)')) {
		// 	$('.allClass1 span:eq(0)').remove();
		// }
		//per1 = per1 + '%';
		// $('.allClass1').append("<span>"+per1+"</span>");
		$('.allClass3 span').text(per3 + '%');
		$('.allClass3:eq(2)').css({'left':offset3+'px'});


		//class4计概
		var count4 = 1;
		for (var i = 0; i < class4_gra.length; i++) {
			if (class4_gra[i] > class4_gra[num] ) {
				count4++;
			}
		}
		var per4 = (((class4_gra.length - count4 + 1) / class4_gra.length) * 100 ).toFixed(2) ;
		//console.log(per1);                       //去掉的话无法实现保留两位小数？？？
		var width4 = per4 * 3 + 'px';   //总长度300px

		$('.allClass4 div').animate({'width': width4},1000);
		var offset4 = $('.allClass4 div').offset().left;
		// if ($('.allClass1:eq(2)')) {
		// 	$('.allClass1 span:eq(0)').remove();
		// }
		//per1 = per1 + '%';
		// $('.allClass1').append("<span>"+per1+"</span>");
		$('.allClass4 span').text(per4 + '%');
		$('.allClass4:eq(2)').css({'left':offset4+'px'});
		*/
	})
})

function LshowPercent(claName,classNum_gra,num) {
	var class_gra = classNum_gra;
	var count = 1;//计数
	var low = 20;
	var high = 79;
	for (var i = 0; i < class_gra.length; i++) {
		if (class_gra[i] > class_gra[num] ) {
			count++;
		}
	}
	// console.log(class1_gra.length);
	// console.log(count1);
	//计算百分比 保留两位小数
	var per = (((class_gra.length - count + 1) / class_gra.length) * 100 ).toFixed(2) ;
	//console.log(per1);
	var $perspan = $("." + claName + " " + "span");   //百分比条

	// if (per < low) {
	// 	$perspan.css({"color":"#FF0"});
	// } else if (per > high) {
	// 	$perspan.css({"color":"#246089"});
	// } else {
	// 	$perspan.css({"color":"#84BBE1"});
	// }

	//按百分比显示颜色
	var $perdiv = $("." + claName + " " + "div");   //百分比条
	// if ($perdiv.hasClass()) {
	// 	$perdiv.removeClass();
	// }
	if (per < low) {
		$perdiv.css({"background-color": "#b1d1e7"});
	} else if (per > high) {
		$perdiv.css({"background-color": "#246089"});
	} else {
		$perdiv.css({"background-color": "#76abd0"});
	}


	//$("." + claName + " " + "span").addClass("attention");
	var width_now = per * 3 + 'px';   //总长度300px
	//console.log(per1);
	//console.log(width1);

	$perdiv.animate({'width': width_now},1000);
	// if ($('.allClass1:eq(2)')) {
	// 	$('.allClass1 span:eq(0)').remove();
	// }
	//per1 = per1 + '%';
	// $('.allClass1').append("<span>"+per1+"</span>");
	$perspan.text(per + '%');
	//var offset_now = $("." + claName + " " + "div").offset().left;
	//$("." + claName + ":eq(2)").css({'left':offset_now+'px'/*, 'height':'25px', 'line-height':'25px'*/});

}