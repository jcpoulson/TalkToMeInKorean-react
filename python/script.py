with open('data.txt') as reader:
    lines = reader.readlines()
    for line in lines:
        x = line.split('. ')
        lesson_num = int(x[0].split(' ')[1])
        lesson_title = str(x[1])
        with open('json.txt', 'a') as writer:
            writer.write(f'lesson{lesson_num}: {{\n  title: {lesson_title}}},\n')