function getStudentIdsSum(studentsArray) {
	const sumOfIds = studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);

    return sumOfIds;
}
