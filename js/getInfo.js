var stu_info = [{'stu_num':'1600011304','stu_name':'汤X辰'},{'stu_num':'1600011311','stu_name':'段X阳'},
				{'stu_num':'1600011318','stu_name':'唐X霖'},{'stu_num':'1600011324','stu_name':'栾X义'},
				{'stu_num':'1600011330','stu_name':'胡X翔'},{'stu_num':'1600011336','stu_name':'欧阳X鸣'},
				{'stu_num':'1600011342','stu_name':'焦X榕'},{'stu_num':'1600011348','stu_name':'吴X'},
				{'stu_num':'1600011354','stu_name':'葛X卿'},{'stu_num':'1600011360','stu_name':'罗X卓'},
				{'stu_num':'1600011366','stu_name':'叶X国'},{'stu_num':'1600011372','stu_name':'陈X天'},
				{'stu_num':'1600011378','stu_name':'郜X啸'},{'stu_num':'1600011384','stu_name':'何X谷'},
				{'stu_num':'1600011390','stu_name':'方X康'},{'stu_num':'1600011396','stu_name':'仇X正'},
				{'stu_num':'1600011402','stu_name':'欧阳X浩'},{'stu_num':'1600011408','stu_name':'徐X放'},
				{'stu_num':'1600011417','stu_name':'吴X'},{'stu_num':'1600011420','stu_name':'郭X安'},
				{'stu_num':'1600011426','stu_name':'王X飞'},{'stu_num':'1600011432','stu_name':'梅X'},
				{'stu_num':'1600011438','stu_name':'张X'},{'stu_num':'1600011444','stu_name':'刘X辰'},
				{'stu_num':'1600011450','stu_name':'杨X瑞'},{'stu_num':'1600061305','stu_name':'王X涵'},
				{'stu_num':'1600061402','stu_name':'李X玉'},{'stu_num':'1600090401','stu_name':'宇贺X文人'}];

function getName(num) {
	for(var i in stu_info){
		if (stu_info[i].stu_num === num) {
			return stu_info[i].stu_name;
		}
	}
}
function getNum(num) {
	for(var i in stu_info){
		if (stu_info[i].stu_num === num) {
			return i;
		}
	}
}