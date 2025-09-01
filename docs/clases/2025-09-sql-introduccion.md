# SQL: Introducción y consultas básicas

Objetivos de la clase:

- Entender qué es SQL y para qué sirve.
- Consultar datos con SELECT, filtrar con WHERE y ordenar con ORDER BY.
- Calcular agregaciones con GROUP BY y combinar tablas con JOIN.

## Requisitos

- Cualquier motor SQL (SQLite, PostgreSQL, MySQL/MariaDB). Para practicar rápido, sirve SQLite.

## Conceptos clave

- Tabla: conjunto de filas (registros) y columnas (campos).
- Esquema: definición de tablas y relaciones.
- Consulta (query): instrucción SQL que solicita o transforma datos.

## Datos de ejemplo

```sql
-- Tabla de estudiantes
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  cohort TEXT NOT NULL,
  grade INTEGER NOT NULL
);

INSERT INTO students (id, name, cohort, grade) VALUES
  (1, 'Ana',  '2025A', 90),
  (2, 'Luis', '2025A', 82),
  (3, 'Sofía','2025B', 95),
  (4, 'Iván', '2025B', 70);

-- Tabla de cursos
CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  code TEXT NOT NULL,
  title TEXT NOT NULL
);

INSERT INTO courses (id, code, title) VALUES
  (1, 'SQL101', 'Introducción a SQL'),
  (2, 'DS201',  'Análisis de Datos');

-- Tabla de inscripciones
CREATE TABLE enrollments (
  student_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  enrolled_at TEXT NOT NULL,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO enrollments (student_id, course_id, enrolled_at) VALUES
  (1, 1, '2025-08-15'),
  (1, 2, '2025-08-20'),
  (2, 1, '2025-08-16'),
  (3, 2, '2025-08-17');
```

## SELECT básico

```sql
-- Todas las columnas
SELECT *
FROM students;

-- Columnas específicas
SELECT name, grade
FROM students;
```

## WHERE (filtros)

```sql
-- Estudiantes con nota >= 85
SELECT name, grade
FROM students
WHERE grade >= 85;

-- Cohorte específica
SELECT *
FROM students
WHERE cohort = '2025A';

-- Condiciones combinadas
SELECT *
FROM students
WHERE cohort = '2025A' AND grade >= 85;
```

## ORDER BY y LIMIT

```sql
-- Ordenar por nota descendente y tomar los 2 primeros
SELECT name, grade
FROM students
ORDER BY grade DESC
LIMIT 2;
```

## DISTINCT

```sql
-- Cohortes únicas
SELECT DISTINCT cohort
FROM students;
```

## Agregaciones y GROUP BY

```sql
-- Promedio de notas por cohorte
SELECT cohort, AVG(grade) AS avg_grade
FROM students
GROUP BY cohort;

-- Contar estudiantes con nota >= 80 por cohorte
SELECT cohort, COUNT(*) AS count_80_plus
FROM students
WHERE grade >= 80
GROUP BY cohort
HAVING COUNT(*) >= 1;  -- filtros sobre agregados
```

## JOINs

```sql
-- Estudiantes con sus cursos (INNER JOIN)
SELECT s.name, c.code, c.title
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses  c ON c.id = e.course_id;

-- LEFT JOIN: todos los estudiantes aunque no tengan inscripción
SELECT s.name, c.code
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.id
LEFT JOIN courses c ON c.id = e.course_id
ORDER BY s.name;
```

## Subconsultas (subqueries)

```sql
-- Estudiantes por encima del promedio general
SELECT name, grade
FROM students
WHERE grade > (SELECT AVG(grade) FROM students);
```

## Índices (mención breve)

- Mejoran el rendimiento de búsquedas/ordenaciones en columnas.
- Costo: más espacio y mantenimiento en escrituras.

```sql
-- Ejemplo: índice por cohort
CREATE INDEX idx_students_cohort ON students(cohort);
```

## Ejercicios

1) Devuelve los estudiantes de la cohorte '2025B' ordenados por nota desc.
2) Muestra el promedio de notas global y por cohorte.
3) Lista estudiantes y el número de cursos en los que están inscritos.
4) Encuentra quién tiene la nota más alta.
5) Devuelve los cursos que no tienen inscripciones (usa LEFT JOIN).
6) Muestra estudiantes con nota superior al promedio de su propia cohorte.

## Recursos

- SQLBolt: https://sqlbolt.com/
- Mode SQL Tutorial: https://mode.com/sql-tutorial/
- Postgres Docs (válido como referencia SQL): https://www.postgresql.org/docs/
