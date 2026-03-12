/**
 * CRISIS MASTER: Simulador de Crisis de Supervivencia Corporativa
 *
 * Evaluación basada en 5 HABILIDADES de liderazgo:
 * - Manejo de Crisis
 * - Inteligencia Emocional
 * - Visión Estratégica
 * - Adaptabilidad
 * - Empatía
 */

// ============================================
// DEFINICIÓN DE HABILIDADES
// ============================================
const skills = {
  crisisManagement: {
    id: 'crisisManagement',
    name: 'Manejo de Crisis',
    color: '#ff1744',
  },
  emotionalIntelligence: {
    id: 'emotionalIntelligence',
    name: 'Inteligencia Emocional',
    color: '#ff9100',
  },
  strategicVision: {
    id: 'strategicVision',
    name: 'Visión Estratégica',
    color: '#7c3aed',
  },
  adaptability: {
    id: 'adaptability',
    name: 'Adaptabilidad',
    color: '#00bcd4',
  },
  empathy: {
    id: 'empathy',
    name: 'Empatía',
    color: '#26a69a',
  },
  resilience: {
    id: 'resilience',
    name: 'Resiliencia',
    color: '#8b5cf6',
  },
};

// ============================================
// ESCENARIOS DE CRISIS
// ============================================
const scenarios = [
  {
    title: 'EL SABOTAJE',
    description:
      'Son las 3 PM. Un error crítico en el código ha detenido completamente la producción. Tu mejor ingeniero acaba de descubrirlo con rostro de pánico. El cliente espera actualización en 2 horas. ¿Qué haces?',
    difficulty: 'medium',
    options: [
      {
        text: 'Convoco reunión inmediata. Yo superviso personalmente. Exijo solución en 90 minutos.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 3,
          emotionalIntelligence: -1,
          strategicVision: 1,
          adaptability: 0,
          empathy: -2,
          resilience: 2,
        },
      },
      {
        text: 'Reúno el equipo técnico. Escuchamos el problema, analizamos opciones juntos y votamos.',
        difficulty: 'medium',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 1,
          empathy: 2,
          resilience: 1,
        },
      },
      {
        text: 'Hablo con el ingeniero de forma calmada. Entiendo qué pasó, qué necesita para corregirlo.',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 3,
          strategicVision: 0,
          adaptability: 1,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: 'Frente al equipo: "Encontramos el fallo antes que el cliente. Salgamos de esta juntos."',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 2,
          strategicVision: 2,
          adaptability: 1,
          empathy: 2,
          resilience: 2,
        },
      },
      {
        text: 'Analizo: ¿Qué recursos tengo? ¿Quién es mejor para resolverlo? Delego estratégicamente.',
        difficulty: 'medium',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 1,
          strategicVision: 3,
          adaptability: 2,
          empathy: 0,
          resilience: 1,
        },
      },
    ],
  },
  {
    title: 'LA FUGA DE TALENTO',
    description:
      'Tu Product Manager estrella (4 años contigo) renuncia. Le ofrecen 40% más en la competencia. Es viernes por la tarde. El equipo está enterado. La moral está baja. ¿Cuál es tu movimiento?',
    difficulty: 'hard',
    options: [
      {
        text: 'Reestructuración salarial inmediata por decisión ejecutiva.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: -2,
          strategicVision: 0,
          adaptability: 0,
          empathy: -1,
          resilience: 2,
        },
      },
      {
        text: 'Reunir el equipo: "¿Qué necesitamos hacer juntos?" Escuchar soluciones colectivas.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 2,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: 'Hablar individualmente con cada miembro clave. Entender qué los motiva.',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 3,
          strategicVision: 1,
          adaptability: 1,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: '"Esto es nuestro momento de prueba. Los grandes equipos salen más fuertes."',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 1,
          empathy: 1,
          resilience: 3,
        },
      },
      {
        text: 'Análisis frío: Costo de cada renuncia. Priorizar retención en roles críticos.',
        difficulty: 'medium',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 0,
          strategicVision: 3,
          adaptability: 2,
          empathy: 0,
          resilience: 1,
        },
      },
    ],
  },
  {
    title: 'EL GRAN PITCH',
    description:
      'Faltan 5 minutos para presentar a investors $2M de funding. Tu equipo está nervioso. Algunos tienen dudas sobre la estrategia. ¿Cómo lidera?',
    difficulty: 'hard',
    options: [
      {
        text: '"Este es MI plan. Confíen en mí. Vamos a venderlo exactamente así."',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: -1,
          strategicVision: 2,
          adaptability: -1,
          empathy: -2,
          resilience: 2,
        },
      },
      {
        text: '"Chicos, ¿alguien tiene última inquietud? Hablemos antes de entrar. Todos cuentan."',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 2,
          empathy: 2,
          resilience: 1,
        },
      },
      {
        text: 'Valido las preocupaciones de cada miembro. "Tu perspectiva es valiosa."',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 3,
          strategicVision: 1,
          adaptability: 1,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: '"Llevaremos la energía de un equipo que cree en algo transformador."',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 2,
          strategicVision: 2,
          adaptability: 1,
          empathy: 1,
          resilience: 2,
        },
      },
      {
        text: 'Repaso: ¿Quién se vende mejor? ¿Quién habla en qué punto? Distribución de roles.',
        difficulty: 'hard',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 1,
          strategicVision: 3,
          adaptability: 1,
          empathy: 0,
          resilience: 1,
        },
      },
    ],
  },
  {
    title: 'LA RECOMPENSA',
    description:
      '¡Lo lograron! Cliente pagó $150K por delivery temprano. La empresa puede crecer. El equipo merece compartir el éxito. Presupuesto limitado. ¿Cómo lo distribuyes?',
    difficulty: 'easy',
    options: [
      {
        text: 'Yo como CEO tomo la decisión. Bonos basados en datos: horas trabajadas, resultados.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: -2,
          strategicVision: 2,
          adaptability: 0,
          empathy: -1,
          resilience: 1,
        },
      },
      {
        text: '"Este dinero es de todos. ¿Cómo creen que deberíamos distribuirlo?"',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 2,
          strategicVision: 0,
          adaptability: 1,
          empathy: 2,
          resilience: 1,
        },
      },
      {
        text: 'Conversaciones 1-a-1. "Quiero reconocer tu contribución. ¿Cómo te gustaría?"',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 3,
          strategicVision: 0,
          adaptability: 1,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: '"Este bonus es la semilla de nuestro siguiente capítulo. Vamos a construir juntos."',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 2,
          strategicVision: 2,
          adaptability: 1,
          empathy: 1,
          resilience: 2,
        },
      },
      {
        text: 'Análisis: ¿Quién es irreemplazable? ¿Riesgo de irse? Retención vs motivación.',
        difficulty: 'medium',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 0,
          strategicVision: 3,
          adaptability: 1,
          empathy: -1,
          resilience: 2,
        },
      },
    ],
  },
  {
    title: 'EL SOCIO INESPERADO',
    description:
      'Una enorme corporación se ofrece a comprar tu startup por $50M, pero exigen cambiar el 80% del equipo directivo (tus amigos fundadores). Tienes 24 horas para decidir.',
    difficulty: 'hard',
    options: [
      {
        text: 'Rechazo la oferta inmediatamente. La lealtad al equipo original no tiene precio.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 3,
          strategicVision: -1,
          adaptability: -1,
          empathy: 3,
          resilience: 2,
        },
      },
      {
        text: 'Analizo los pros y contras financieros aislándome del equipo para ser objetivo.',
        difficulty: 'hard',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: -1,
          strategicVision: 3,
          adaptability: 1,
          empathy: -2,
          resilience: 2,
        },
      },
      {
        text: 'Reúno a los fundadores afectados. Les expongo la situación y decidimos juntos el futuro.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 1,
          empathy: 2,
          resilience: 1,
        },
      },
      {
        text: 'Intento renegociar con la corporación para mantener al equipo aunque baje el precio de compra.',
        difficulty: 'easy',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 1,
          strategicVision: 2,
          adaptability: 2,
          empathy: 1,
          resilience: 1,
        },
      },
      {
        text: 'Acepto. Es el paso lógico para la empresa, y buscaré posiciones externas para mis amigos.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: -2,
          strategicVision: 3,
          adaptability: 2,
          empathy: -1,
          resilience: 2,
        },
      },
    ],
  },
  {
    title: 'LA CAÍDA DEL SERVIDOR',
    description:
      'Black Friday. Tu mayor día de ventas. El servidor colapsa por el tráfico y se caen todas las transacciones. El estrés en la oficina se corta con un cuchillo.',
    difficulty: 'hard',
    options: [
      {
        text: 'Tomo el control técnico, doy órdenes directas y grito responsabilidades constantes.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: -3,
          strategicVision: 0,
          adaptability: -1,
          empathy: -2,
          resilience: 2,
        },
      },
      {
        text: 'Establezco una "Sala de Guerra". Ordeno roles claros y actúo de nexo entre el equipo técnico y soporte.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 3,
          emotionalIntelligence: 1,
          strategicVision: 2,
          adaptability: 2,
          empathy: 0,
          resilience: 2,
        },
      },
      {
        text: 'Pido calma a todos. Confío en mi CTO e intento aliviar el estrés comprando comida para el equipo.',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 3,
          strategicVision: 0,
          adaptability: 1,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: 'Activo inmediatamente el servidor de respaldo temporal y redacto un comunicado para calmar a los clientes.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 3,
          emotionalIntelligence: 1,
          strategicVision: 1,
          adaptability: 2,
          empathy: 2,
          resilience: 2,
        },
      },
      {
        text: 'Me enfoco en el "post-mortem": planeando ya cómo usar esto para no repetir el error el próximo año.',
        difficulty: 'medium',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 0,
          strategicVision: 3,
          adaptability: 2,
          empathy: 0,
          resilience: 2,
        },
      },
    ],
  },
  {
    title: 'LA EXPANSIÓN GLOBAL',
    description:
      'Acaban de aprobar la apertura de oficinas en Asia y Europa simultáneamente. Es un crecimiento monumental de 30 a 300 empleados en 6 meses.',
    difficulty: 'medium',
    options: [
      {
        text: 'Centralizo todo el poder. Viajaré entre las sedes cada semana controlando cada métrica.',
        difficulty: 'hard',
        sentiment: 'negative',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: -1,
          strategicVision: 1,
          adaptability: -2,
          empathy: -1,
          resilience: 2,
        },
      },
      {
        text: 'Diseño una arquitectura corporativa sólida y contrato directores regionales con completa autonomía.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 0,
          strategicVision: 3,
          adaptability: 2,
          empathy: 0,
          resilience: 2,
        },
      },
      {
        text: 'Construyo la expansión basándome puramente en adaptar la cultura interna a cada nuevo país.',
        difficulty: 'easy',
        sentiment: 'positive',
        impact: {
          crisisManagement: 0,
          emotionalIntelligence: 2,
          strategicVision: 1,
          adaptability: 3,
          empathy: 3,
          resilience: 1,
        },
      },
      {
        text: 'Mantengo reuniones diarias de alineación global. La cultura unificada es innegociable.',
        difficulty: 'medium',
        sentiment: 'positive',
        impact: {
          crisisManagement: 1,
          emotionalIntelligence: 2,
          strategicVision: 2,
          adaptability: 1,
          empathy: 1,
          resilience: 2,
        },
      },
      {
        text: 'Creo células de trabajo independientes. Pivotamos la estrategia semanalmente según las métricas locales.',
        difficulty: 'easy',
        sentiment: 'neutral',
        impact: {
          crisisManagement: 2,
          emotionalIntelligence: 1,
          strategicVision: 2,
          adaptability: 3,
          empathy: 0,
          resilience: 2,
        },
      },
    ],
  },
];

// ============================================
// ESTADO DEL SIMULADOR
// ============================================
let gameState = {
  currentScenario: 0,
  totalDecisions: 0,
  startTime: null,
  timeSeconds: 0,
  scores: {
    crisisManagement: 0,
    emotionalIntelligence: 0,
    strategicVision: 0,
    adaptability: 0,
    empathy: 0,
    resilience: 0,
  },
  history: [],
};

// ============================================
// FUNCIONES DE CONTROL PRINCIPAL
// ============================================

function startExperience() {
  gameState.currentScenario = 0;
  gameState.totalDecisions = 0;
  gameState.startTime = Date.now();
  gameState.timeSeconds = 0;
  gameState.scores = {
    crisisManagement: 0,
    emotionalIntelligence: 0,
    strategicVision: 0,
    adaptability: 0,
    empathy: 0,
    resilience: 0,
  };
  gameState.history = [];

  document.getElementById('intro-screen').classList.remove('screen-active');
  document.getElementById('quiz-screen').classList.add('screen-active');
  renderScenario();
}

function renderScenario() {
  const scenario = scenarios[gameState.currentScenario];
  if (!scenario) return;

  // Actualizar barra de progreso
  const totalScenarios = scenarios.length;
  const progressPercent =
    ((gameState.currentScenario + 1) / totalScenarios) * 100;
  const progressFill = document.getElementById('progress-bar-fill');
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }

  // Actualizar contadores
  document.getElementById('current-step').textContent =
    gameState.currentScenario + 1;
  document.getElementById('total-steps').textContent = totalScenarios;
  document.getElementById('scenario-number').textContent = scenario.title;
  document.getElementById('points-display').textContent =
    gameState.totalDecisions;

  // Actualizar Tensión / Nivel
  const levelDisplay = document.getElementById('level-display');
  if (levelDisplay) {
    if (scenario.difficulty === 'easy') {
      levelDisplay.textContent = 'BAJA';
      levelDisplay.style.color = 'var(--success-premium)';
    } else if (scenario.difficulty === 'medium') {
      levelDisplay.textContent = 'MEDIA';
      levelDisplay.style.color = 'var(--warning-premium)';
    } else if (scenario.difficulty === 'hard') {
      levelDisplay.textContent = 'CRÍTICA';
      levelDisplay.style.color = 'var(--accent-premium)';
    }
  }

  // Animar aguja de estrés (stress-needle)
  const stressNeedle = document.getElementById('stress-needle');
  if (stressNeedle) {
    const isMobile = window.innerWidth <= 900;
    if (scenario.difficulty === 'easy') {
      stressNeedle.style.bottom = isMobile ? '50%' : '15%'; // Verde
      stressNeedle.style.left = isMobile ? '15%' : '50%';
    } else if (scenario.difficulty === 'medium') {
      stressNeedle.style.bottom = isMobile ? '50%' : '50%'; // Amarillo
      stressNeedle.style.left = isMobile ? '50%' : '50%';
    } else if (scenario.difficulty === 'hard') {
      stressNeedle.style.bottom = isMobile ? '50%' : '85%'; // Rojo
      stressNeedle.style.left = isMobile ? '85%' : '50%';
    }
  }

  // Mostrar título del escenario
  document.getElementById('scenario-title').textContent = scenario.title;
  document.getElementById('scenario-description').textContent =
    scenario.description;

  // Renderizar botones de opciones
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  scenario.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = `option-btn`;

    // Encontrar skill con mayor impacto POSITIVO
    let maxSkill = null;
    let maxImpact = -999;
    Object.entries(option.impact).forEach(([skillId, impact]) => {
      if (impact > maxImpact) {
        maxImpact = impact;
        maxSkill = skillId;
      }
    });

    const skillInfo = skills[maxSkill];
    btn.setAttribute('data-skill', maxSkill);
    btn.setAttribute('data-difficulty', option.difficulty);
    btn.setAttribute('data-sentiment', option.sentiment);

    btn.innerHTML = `
      <div class="option-content">
        <span class="option-text">${option.text}</span>
      </div>
    `;

    btn.onclick = () => selectAnswer(option, index);
    container.appendChild(btn);
  });
}

function selectAnswer(option, optionIndex) {
  // Aplicar impacto en habilidades
  Object.entries(option.impact).forEach(([skillId, impact]) => {
    gameState.scores[skillId] += Math.max(0, impact);
  });

  // Incrementar decisiones
  gameState.totalDecisions++;
  gameState.history.push({
    scenario: gameState.currentScenario,
    option: optionIndex,
    impact: option.impact,
  });

  // Siguiente escenario
  gameState.currentScenario++;
  if (gameState.currentScenario < scenarios.length) {
    setTimeout(() => renderScenario(), 300);
  } else {
    gameState.timeSeconds = Math.floor(
      (Date.now() - gameState.startTime) / 1000,
    );
    setTimeout(() => showResults(), 500);
  }
}

// ============================================
// PANTALLA DE RESULTADOS
// ============================================

// ============================================
// DEFINICIÓN DE PERFILES DE LIDERAZGO
// ============================================

const leadershipProfiles = [
  {
    id: 'el_estratega_resolutivo',
    name: 'El Estratega Resolutivo',
    description:
      'Un líder frío bajo presión que prioriza la estructura y la visión a largo plazo. Excelente resolviendo crisis técnicas y corporativas, aunque a veces puede parecer distante con las necesidades emocionales del equipo.',
    requirements: ['crisisManagement', 'strategicVision'],
  },
  {
    id: 'el_pilar_empatico',
    name: 'El Pilar Empático',
    description:
      'El pegamento que mantiene unido al equipo. Tu mayor fuerza es la conexión humana. Pones a tu gente primero, creando una lealtad inquebrantable, incluso si sacrificas eficiencia operativa a corto plazo.',
    requirements: ['empathy', 'emotionalIntelligence'],
  },
  {
    id: 'el_visionario_agil',
    name: 'El Visionario Ágil',
    description:
      'Un pionero que se adapta a la velocidad de la luz. Ves hacia dónde va el mercado y cambias de rumbo sin titubear. Tu equipo te sigue porque siempre pareces estar un paso adelante del desastre.',
    requirements: ['strategicVision', 'adaptability'],
  },
  {
    id: 'el_bombero_tactico',
    name: 'El Bombero Táctico',
    description:
      'Naciste para el caos. Cuando las alarmas suenan, tú entras en "la zona". Actúas rápido, improvisas con los recursos a mano y apagas el fuego antes de que destruya la empresa.',
    requirements: ['crisisManagement', 'resilience'],
  },
  {
    id: 'el_mediador_inteligente',
    name: 'El Mediador Inteligente',
    description:
      'Maestro de la política interna y las relaciones interpersonales. Sabes leer la sala, calmar los ánimos y negociar acuerdos beneficiosos. En la tormenta, tú eres la calma.',
    requirements: ['emotionalIntelligence', 'adaptability'],
  },
  {
    id: 'el_catalizador_de_cultura',
    name: 'El Catalizador de Cultura',
    description:
      'Adaptable y profundamente empático. Eres capaz de fusionar diferentes culturas de trabajo y hacer que personas muy distintas colaboren armónicamente en entornos cambiantes.',
    requirements: ['adaptability', 'empathy'],
  },
  {
    id: 'el_arquitecto_humano',
    name: 'El Arquitecto Humano',
    description:
      'Combina una visión clara del futuro con una profunda inteligencia emocional para guiar al equipo. Inspiras a los demás a alcanzar metas ambiciosas sintiéndose valorados en el proceso.',
    requirements: ['strategicVision', 'emotionalIntelligence'],
  },
  {
    id: 'el_comandante_de_acero',
    name: 'El Comandante de Acero',
    description:
      'Un perfil balanceado y resistente. Tienes un equilibrio notable en la mayoría de las habilidades, lo que te permite liderar con firmeza y justicia sin importar la naturaleza de la crisis.',
    requirements: [], // Perfil por defecto / comodín si no hay picos claros
  },
];

function calculateLeadershipProfile() {
  // Ordenar habilidades por puntuación de mayor a menor
  const sortedSkills = Object.keys(gameState.scores).sort(
    (a, b) => gameState.scores[b] - gameState.scores[a],
  );
  const topSkill1 = sortedSkills[0];
  const topSkill2 = sortedSkills[1];

  // Buscar el perfil que requiera las dos habilidades principales
  for (let profile of leadershipProfiles) {
    if (profile.requirements.length === 2) {
      if (
        profile.requirements.includes(topSkill1) &&
        profile.requirements.includes(topSkill2)
      ) {
        return profile;
      }
    }
  }

  // Si no encaja perfectamente o hay empate nulo, devuelve el comandante de acero
  return (
    leadershipProfiles[7] || leadershipProfiles[leadershipProfiles.length - 1]
  );
}

let radarChartInstance = null;

function renderRadarChart() {
  const ctx = document.getElementById('radarCanvas').getContext('2d');

  // Destruir instancia previa si existe para evitar superposiciones
  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  const dataValues = [
    gameState.scores.crisisManagement,
    gameState.scores.emotionalIntelligence,
    gameState.scores.strategicVision,
    gameState.scores.adaptability,
    gameState.scores.empathy,
    gameState.scores.resilience,
  ];

  const labels = [
    'Manejo de Crisis',
    'Int. Emocional',
    'Vis. Estratégica',
    'Adaptabilidad',
    'Empatía',
    'Resiliencia',
  ];

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Tus Puntos',
          data: dataValues,
          backgroundColor: 'rgba(14, 165, 233, 0.4)',
          borderColor: '#0ea5e9',
          pointBackgroundColor: '#d4af37',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#d4af37',
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: {
            color: '#94a3b8',
            font: { size: 10, family: '-apple-system, sans-serif' },
          },
          ticks: { display: false, min: 0, max: 20 }, // Oculta los números internos
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#0ea5e9',
          bodyColor: '#fff',
          borderColor: 'rgba(14, 165, 233, 0.3)',
          borderWidth: 1,
        },
      },
    },
  });
}

function showResults() {
  document.getElementById('quiz-screen').classList.remove('screen-active');
  document.getElementById('results-screen').classList.add('screen-active');

  const profile = calculateLeadershipProfile();

  // Mostrar habilidad dominante
  document.getElementById('final-score').textContent = profile.name;
  document.getElementById('profile-name').innerHTML =
    `<i data-lucide="award" style="width:24px;height:24px;display:inline-block;vertical-align:middle;margin-right:8px;color:var(--accent-premium);"></i> Tu Veredicto Final`;

  // Descripción simple
  document.getElementById('profile-desc').textContent = profile.description;

  // Renderizar Radar
  renderRadarChart();

  const skillsOrder = [
    'crisisManagement',
    'emotionalIntelligence',
    'strategicVision',
    'adaptability',
    'empathy',
    'resilience',
  ];

  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = '';

  // Tus fortalezas (Top 2)
  const sortedSkills = Object.keys(gameState.scores).sort(
    (a, b) => gameState.scores[b] - gameState.scores[a],
  );
  const traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = '';

  for (let i = 0; i < 2; i++) {
    const sId = sortedSkills[i];
    const sInfo = skills[sId];
    if (gameState.scores[sId] > 0) {
      traitsList.innerHTML += `<li><span class="strength-check"><i data-lucide="check-circle" style="width:16px;height:16px;"></i></span> Destacas en: ${sInfo.name}</li>`;
    }
  }

  lucide.createIcons(); // Refrescar iconos inyectados dinamicamente

  skillsOrder.forEach((skillId) => {
    const skillInfo = skills[skillId];
    const score = gameState.scores[skillId];
    // Ajustar porcentaje maximo relativo a 7 preguntas (max teorico aprox 21)
    const percentage = Math.min(100, (score / 21) * 100);

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score-item';
    scoreDiv.innerHTML = `
      <div class="score-label">${skillInfo.name}</div>
      <div class="score-bar">
        <div class="score-fill" style="width: ${percentage}%; background-color: ${skillInfo.color};"></div>
      </div>
      <div class="score-value">${score} pts</div>
    `;
    scoresContainer.appendChild(scoreDiv);
  });
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

function restartExperience() {
  document.getElementById('results-screen').classList.remove('screen-active');
  document.getElementById('intro-screen').classList.add('screen-active');

  gameState.currentScenario = 0;
  gameState.totalDecisions = 0;
  gameState.startTime = null;
  gameState.timeSeconds = 0;
  gameState.scores = {
    crisisManagement: 0,
    emotionalIntelligence: 0,
    strategicVision: 0,
    adaptability: 0,
    empathy: 0,
    resilience: 0,
  };
  gameState.history = [];
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('total-steps').textContent = scenarios.length;
});
