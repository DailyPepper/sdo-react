with open('../Testing/input/input_variables', 'r') as f:
    variables_teacher = [line.rstrip() for line in f]
math_operations = ['=', '+', '-']
formulas_teacher = []
buff = []
with open('../Testing/input/formular_teacher') as f:
    for line in f:
        line = line.rstrip()
        for char1 in line:
            for char2 in math_operations:
                if char1 == char2:
                    buff.append(line[:line.find(char2)])
                    buff.append(char2)
                    line = line[line.find(char2) + 1:]
        buff.append(line)
        formulas_teacher.append(buff)
        buff = []
variables_student = dict()
formulas_student = []
with open('../Testing/input/code', 'r') as f:
    count = 0
    for line in f:
        line = line.rstrip()
        if line.count('input()') > 0 or count < len(variables_teacher):
            s = line[:line.find('=')]
            variables_student[s] = str(variables_teacher[count])
            count += 1
        else:
            for char1 in line:
                for char2 in math_operations:
                    if char1 == char2:
                        buff.append(line[:line.find(char2)])
                        buff.append(char2)
                        line = line[line.find(char2) + 1:]
            buff.append(line)
            formulas_student.append(buff)
            buff = []
flag = True
formulas_comparison = []
for arr1 in formulas_teacher:
    for arr2 in formulas_student:
        for i in range(2, len(arr1)):
            try:
                if arr1[i] != variables_student[str(arr2[i])]:
                    flag = False
            except KeyError:
                if arr1[i] != arr2[i]:
                    flag = False
        if flag == True:
            variables_student[str(arr2[0])] = str(arr1[0])
            formulas_comparison.append(True)
            break
        else:
            flag = True
    if flag == False:
        formulas_comparison.append(False)
        flag = True
print(formulas_comparison)
