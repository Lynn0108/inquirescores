$(function () {

	var class1_gra = [100,100,67,95,100,80,85,82,98,75,98,95,75,98,
					  100,88,94,85,80,84,66,74,83,100,85,70,32,48];
	var class2_gra = [95,92.5,95,95,100,93,75.5,95,88,71,93,97,90,86.5,
					  86,84,86.5,99,67,76,72,85.5,90,81,76,78,47,59.5];
	var class3_gra = [80,0,57,95,0,100,75,95,78,70,0,78,83,
					  100,78,89,50,0,76,91,86,81,80,100,0];
	var class4_gra = [94,60,87,92,100,88,69,97,91,65,86,96,83,48,
					  93,92,82,84,87,87,87,78,94,75,83,0,57,84];


	/*--------------------------class1高数------------------------------*/
	$(".input_gra .btn1").click(function () {
		RshowPercent(this,class1_gra);
	})
	/*--------------------------class2力学------------------------------*/
	$(".input_gra .btn2").click(function () {
		RshowPercent(this,class2_gra);
	})
	/*--------------------------class3线代------------------------------*/
	$(".input_gra .btn3").click(function () {
		RshowPercent(this,class3_gra);
	})
	/*--------------------------class4计概------------------------------*/
	$(".input_gra .btn4").click(function () {
		RshowPercent(this,class4_gra);
	})

	/*
	//class1高数
	$(".input_gra .btn1").click(function () {
		var $testparent = $(this).parent();
		var $perdiv = $(this).parent().next();
		if (! $perdiv.is(":animated")) {
			var gra = $(this).siblings().val();
			if ((gra < 0) || (gra > 100) || isNaN(gra)) {
				alert("请输入正确的分数");
				return false;
			}
			//submitFlag = true;
			//console.log(stu_num);
			//计算排名
			var count = 1;
			for (var i = 0; i < class1_gra.length; i++) {
				if (class1_gra[i] > gra ) {
					count++;
				}
			}
			// console.log(class1_gra.length);
			//console.log(count);
			//计算百分比 保留两位小数
			var per = (((class1_gra.length - count + 1) / class1_gra.length) * 100 ).toFixed(2) ;
			//console.log(per);                       //去掉的话无法实现保留两位小数？？？
			var height_now = per * 1.4 + 'px';   //总长度180px
			per = per + '%';

			$perdiv.animate({height: height_now},1000);
			//$('.sin_class1_per span').text(""+ per);
			var $perspan = $perdiv.find("span");
			//console.log($perspan);
			$perspan.text(""+ per);

			//submitFlag = false;
		}
	})
	//class2力学
	$(".input_gra .btn2").click(function () {
		if (! $('.sin_class2_per').is(":animated")) {
			var gra = $(this).siblings().val();
			if ((gra < 0) || (gra > 100) || isNaN(gra)) {
				alert("请输入正确的分数");
				return false;
			}
			//console.log(stu_num);
			//计算排名
			var count = 1;
			for (var i = 0; i < class2_gra.length; i++) {
				if (class2_gra[i] > gra ) {
					count++;
				}
			}
			// console.log(class1_gra.length);
			//console.log(count);
			//计算百分比 保留两位小数
			var per = (((class2_gra.length - count + 1) / class2_gra.length) * 100 ).toFixed(2) ;
			//console.log(per);                       //去掉的话无法实现保留两位小数？？？
			var height_now = per * 1.4 + 'px';   //总长度180px
			per = per + '%';

			$('.sin_class2_per').animate({height: height_now},1000);
			$('.sin_class2_per span').text(""+ per);
		}
	})
	//class3线代
	$(".input_gra .btn3").click(function () {
		if (! $('.sin_class3_per').is(":animated")) {
			var gra = $(this).siblings().val();
			if ((gra < 0) || (gra > 100) || isNaN(gra)) {
				alert("请输入正确的分数");
				return false;
			}
			//console.log(stu_num);
			//计算排名
			var count = 1;
			for (var i = 0; i < class3_gra.length; i++) {
				if (class3_gra[i] > gra ) {
					count++;
				}
			}
			// console.log(class1_gra.length);
			//console.log(count);
			//计算百分比 保留两位小数
			var per = (((class3_gra.length - count + 1) / class3_gra.length) * 100 ).toFixed(2) ;
			//console.log(per);                       //去掉的话无法实现保留两位小数？？？
			var height_now = per * 1.4 + 'px';   //总长度180px
			per = per + '%';

			$('.sin_class3_per').animate({height: height_now},1000);
			$('.sin_class3_per span').text(""+ per);
		}
	})
	/class4计概
	$(".input_gra .btn4").click(function () {
		if (! $('.sin_class4_per').is(":animated")) {
			var gra = $(this).siblings().val();
			if ((gra < 0) || (gra > 100) || isNaN(gra)) {
				alert("请输入正确的分数");
				return false;
			}
			//console.log(stu_num);
			//计算排名
			var count = 1;
			for (var i = 0; i < class4_gra.length; i++) {
				if (class4_gra[i] > gra ) {
					count++;
				}
			}
			// console.log(class1_gra.length);
			//console.log(count);
			//计算百分比 保留两位小数
			var per = (((class4_gra.length - count + 1) / class4_gra.length) * 100 ).toFixed(2) ;
			console.log(per);                       //去掉的话无法实现保留两位小数？？？
			var height_now = per * 1.4 + 'px';   //总长度180px
			per = per + '%';

			$('.sin_class4_per').animate({height: height_now},1000);
			$('.sin_class4_per span').text(""+ per);
		}
	})
	*/
})

function RshowPercent(e,classNum_gra) {
	var class_gra = classNum_gra;
	//var $testparent = $(e).parent();
	var $perdiv = $(e).parent().next();
	if (! $perdiv.is(":animated")) {
		var gra = $(e).siblings().val();
		if ((gra < 0) || (gra > 100) || isNaN(gra)) {
			alert("请输入正确的分数");
			return false;
		}
		//计算排名
		var count = 1;
		for (var i = 0; i < class_gra.length; i++) {
			if (class_gra[i] > gra ) {
				count++;
			}
		}
		//计算百分比 保留两位小数
		var per = (((class_gra.length - count + 1) / class_gra.length) * 100 ).toFixed(2) ;
		//console.log(per);
		var height_now = per * 1.4 + 'px';   //总长度140px
		per = per + '%';

		$perdiv.animate({height: height_now},1000);
		var $perspan = $perdiv.find("span");
		$perspan.text(""+ per);
	}
}