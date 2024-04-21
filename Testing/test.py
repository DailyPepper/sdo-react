class teacher_list:
    variables = dict()
    input_variables = []
    formulas_teacher = dict()
    formulas_student = dict()
    check = []
    operations_in_math = ['+', '-', '/', '*', '=']

    def __int__(self, variables, formulas):
        self.variables = variables
        self.formulas = formulas

    def binding_variables(self, a, b):  # a - student variable, b - teacher variable
        buff = dict()
        for i in range(0, len(self.variables)):
            if b == list(self.variables.items())[i][1]:
                buff[a] = b
            else:
                buff[list(self.variables.items())[i][0]] = list(self.variables.items())[i][1]
        self.variables = buff

    def binding_formulas(self, a, b):  # a - student formula, b - teacher formula
        for i in range(0, len(self.formulas_teacher)):
            if b == list(self.formulas_teacher.items())[i][1]:
                self.formulas_student[i] = a

    def add_variable(self, a):
        flag = False
        for i in range(0, len(self.variables)):
            if a == self.variables[i]:
                flag = True
        if flag == False:
            self.variables[len(self.variables)] = a

    def add_teacher_formula(self, a):
        buff = []
        for char1 in a:
            for char2 in self.operations_in_math:
                if char1 == char2:
                    buff.append(a[:a.find(char2)])
                    self.add_variable(a[:a.find(char2)])
                    buff.append(char2)
                    a = a[a.find(char2) + 1:]
        buff.append(a)
        self.add_variable(a)
        self.formulas_teacher[len(self.formulas_teacher)] = buff
        buff = []
        self.check.append(False)

    def add_student_formula(self, a):
        formula_variables = []
        formula = []
        for char1 in a:
            for char2 in self.operations_in_math:
                if char1 == char2:
                    formula.append(a[:a.find(char2)])
                    formula.append(char2)
                    a = a[a.find(char2) + 1:]
        formula.append(a)
        for ind2 in range(0, len(self.formulas_teacher)):
            check = True
            if len(formula) != len(self.formulas_teacher[ind2]):
                check = False
            for ind1 in range(2, len(formula), 2):
                if ind1 % 2 == 0:
                    try:
                        if self.variables[formula[ind1]] != self.formulas_teacher[ind2][ind1]:
                            check = False
                    except KeyError:
                        check = False
                    except IndexError:
                        check = False
                else:
                    try:
                        if formula[ind1] != self.formulas[ind2][ind1]:
                            check = False
                    except IndexError:
                        check = False
            if check == True:
                self.binding_variables(formula[0], self.formulas_teacher[ind2][0])
                self.binding_formulas(formula, self.formulas_teacher[ind2])
            else:
                print('')


teacher_list = teacher_list()
with open('input/formular_teacher') as f:
    for line in f:
        line = line.rstrip()
        teacher_list.add_teacher_formula(line)
buff = dict()
for i in range(1, len(teacher_list.variables) - 1):
    if teacher_list.variables[i] == 'a1':
        buff['a'] = teacher_list.variables[i]
    else:
        buff[i] = teacher_list.variables[i]

with open('input\input_variables') as f:
    for line in f:
        line = line.rstrip()
        teacher_list.input_variables.append(line)
with open('input\code') as f:
    input_count = 0
    for line in f:
        line = line.rstrip()
        if line.find('input()') > -1:
            char = line[:line.find('=')]
            teacher_list.binding_variables(char, teacher_list.input_variables[input_count])
            input_count = input_count + 1
        else:
            teacher_list.add_student_formula(line)
print('Прошли проверку формулы:')
for i in range(0, len(teacher_list.formulas_teacher)):
    try:
        print(teacher_list.formulas_student[i])
    except KeyError:
        print('')
