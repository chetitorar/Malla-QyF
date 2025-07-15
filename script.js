// Diccionario de relaciones (quién desbloquea a quién)
const relaciones = {
  "Introducción a la Farmacia": ["Ética Farmacéutica"],
  "Álgebra, Trigonometría": ["Cálculo"],
  "Química General I": ["Química General II", "Bioquímica"],
  "Biología General": ["Bioquímica", "Histología"],
  "Física Aplicada": ["Fisicoquímica"],
  "Ética Farmacéutica": ["Farmacia, Sociedad"],
  "Cálculo": ["Química Analítica"],
  "Química General II": ["Química Analítica", "Química Orgánica"],
  "Bioquímica": ["Biología Molecular"],
  "Fisicoquímica": ["Tecnología Farmacéutica I"],
  "Farmacia, Sociedad": ["Investigación Farmacéutica"],
  "Química Analítica": ["Análisis Instrumental"],
  "Química Orgánica": ["Química Orgánica II"],
  "Biología Molecular": ["Fisiología II", "Microbiología"],
  "Inglés I": ["Inglés II"],
  "Análisis Instrumental": ["Farmacología Básica: Fitoterapia", "Control de Calidad, Análisis Farmacéutico"],
  "Química Orgánica II": ["Control de Calidad, Análisis Farmacéutico"],
  "Fisiología I": ["Fisiología II"],
  "Inglés II": ["Inglés III"],
  "Farmacología Básica: Fitoterapia": ["Práctica Inicial", "Farmacología Molecular I", "Farmacoquímica I"],
  "Control de Calidad, Análisis Farmacéutico": ["Práctica Inicial"],
  "Salud Pública": ["Práctica Inicial"],
  "Fisiología II": ["Fisiopatología", "Práctica Inicial"],
  "Inglés III": ["Inglés IV", "Práctica Inicial"],
  "Práctica Inicial": ["Práctica Intermedia"],
  "Farmacología Molecular I": ["Farmacología Molecular II"],
  "Farmacoquímica I": ["Farmacoquímica II"],
  "Fisiopatología": ["Bioquímica Clínica"],
  "Microbiología": ["Inmunología Aplicada"],
  "Farmacología Molecular II": ["Práctica Intermedia", "Farmacología Clínica, Terapéutica", "Toxicología", "Terapia Celular, Terapia Génica", "Farmacoterapia de Precisión, Farmacogenética"],
  "Farmacoquímica II": ["Práctica Intermedia"],
  "Bioquímica Clínica": ["Práctica Intermedia"],
  "Tecnología Farmacéutica I": ["Biofarmacia, Farmacocinética", "Tecnología Farmacéutica II", "Práctica Intermedia"],
  "Inmunología Aplicada": ["Práctica Intermedia"],
  "Farmacología Clínica, Terapéutica": ["Farmacología Clínica, Terapéutica de Sistemas"],
  "Toxicología": ["Bromatología"],
  "Tecnología Farmacéutica II": ["Farmacia Asistencial"],
  "Farmacología Clínica, Terapéutica de Sistemas": ["Electivo I", "Electivo II", "Práctica Final"],
  "Bromatología": ["Electivo I", "Electivo II", "Práctica Final"],
  "Farmacia Asistencial": ["Electivo I", "Electivo II", "Práctica Final"],
  "Legislación Farmacéutica": ["Electivo I", "Electivo II", "Práctica Final"],
  "Administración, Gestión en Farmacia": ["Electivo I", "Electivo II", "Práctica Final"],
  "Terapia Celular, Terapia Génica": ["Electivo I", "Electivo II", "Práctica Final"],
  "Farmacoterapia de Precisión, Farmacogenética": ["Electivo I", "Electivo II", "Práctica Final"],
  "Electivo I": ["Tesis"],
  "Electivo II": ["Tesis"],
  "Práctica Final": ["Tesis"],
  "SEXTO AÑO – I": ["Tesis"]
};

// Datos de los semestres y asignaturas
const semestres = [
  ["PRIMER AÑO – I", [
    "Introducción a la Farmacia",
    "Álgebra, Trigonometría",
    "Química General I",
    "Biología General",
    "Física Aplicada"
  ]],
  ["PRIMER AÑO – II", [
    "Ética Farmacéutica",
    "Cálculo",
    "Química General II",
    "Bioquímica",
    "Fisicoquímica"
  ]],
  ["SEGUNDO AÑO – I", [
    "Farmacia, Sociedad",
    "Química Analítica",
    "Química Orgánica",
    "Biología Molecular",
    "Inglés I"
  ]],
  ["SEGUNDO AÑO – II", [
    "Análisis Instrumental",
    "Química Orgánica II",
    "Estadística",
    "Fisiología I",
    "Inglés II"
  ]],
  ["TERCER AÑO – I", [
    "Farmacología Básica: Fitoterapia",
    "Control de Calidad, Análisis Farmacéutico",
    "Salud Pública",
    "Fisiología II",
    "Inglés III"
  ]],
  ["TERCER AÑO – II", [
    "Práctica Inicial",
    "Farmacología Molecular I",
    "Farmacoquímica I",
    "Investigación Farmacéutica",
    "Fisiopatología",
    "Microbiología",
    "Inglés IV"
  ]],
  ["CUARTO AÑO – I", [
    "Farmacología Molecular II",
    "Farmacoquímica II",
    "Bioquímica Clínica",
    "Tecnología Farmacéutica I",
    "Inmunología Aplicada"
  ]],
  ["CUARTO AÑO – II", [
    "Práctica Intermedia",
    "Farmacología Clínica, Terapéutica",
    "Toxicología",
    "Biofarmacia, Farmacocinética",
    "Tecnología Farmacéutica II"
  ]],
  ["QUINTO AÑO – I", [
    "Farmacología Clínica, Terapéutica de Sistemas",
    "Bromatología",
    "Farmacia Asistencial",
    "Legislación Farmacéutica",
    "Administración, Gestión en Farmacia",
    "Terapia Celular, Terapia Génica",
    "Farmacoterapia de Precisión, Farmacogenética"
  ]],
  ["QUINTO AÑO – II", [
    "Electivo I",
    "Electivo II",
    "Práctica Final"
  ]],
  ["SEXTO AÑO – I", [
    "Tesis"
  ]]
];

// Estado de cada ramo
const estadoRamos = {};

// Crear interfaz
const contenedor = document.getElementById('malla');

semestres.forEach(([nombreSemestre, ramos]) => {
  const divSemestre = document.createElement('div');
  divSemestre.className = 'semestre';
  const titulo = document.createElement('h2');
  titulo.textContent = nombreSemestre;
  divSemestre.appendChild(titulo);

  ramos.forEach(ramo => {
    const divRamo = document.createElement('div');
    divRamo.className = 'ramo';
    divRamo.textContent = ramo;
    divRamo.dataset.nombre = ramo;

    estadoRamos[ramo] = {
      aprobado: false,
      element: divRamo,
      bloqueado: !Object.values(relaciones).some(arr => arr.includes(ramo)) // desbloqueados si no dependen de nadie
    };

    if (!estadoRamos[ramo].bloqueado) {
      divRamo.classList.add('locked');
    }

    divRamo.addEventListener('click', () => {
      if (divRamo.classList.contains('locked')) return;

      divRamo.classList.add('aprobado');
      estadoRamos[ramo].aprobado = true;

      // Desbloquear dependientes
      const dependientes = relaciones[ramo] || [];
      dependientes.forEach(dep => {
        const depState = estadoRamos[dep];
        if (depState && !depState.aprobado) {
          depState.bloqueado = false;
          depState.element.classList.remove('locked');
        }
      });
    });

    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
});
