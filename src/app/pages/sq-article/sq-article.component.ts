import { Component, AfterViewInit, OnDestroy } from '@angular/core';

interface ArticleSection {
  heading?: string;
  html: string;
}

@Component({
  selector: 'app-sq-article',
  templateUrl: './sq-article.component.html',
  styleUrls: ['./sq-article.component.scss']
})
export class SqArticleComponent {
  editMode = false;
  activeSection = 0;
  private observer?: IntersectionObserver;
  article = {
    title: 'Boletín Pandor-AI',
    subtitle: '',
    author: 'Semillero PANDOR-A.I',
    date: 'October 2025',
    // Semillero members list
    members: [
      { name: 'Elizabeth Johana Montana Acevedo', role: 'Líder de Semillero' },
      { name: 'Dario Rolando Rojas Lopez', role: 'Líder de Estudiantes' },
      { name: 'David Stivel Rojas Lopez', role: 'Miembro' },
      { name: 'Carlos Mauricio Neira Nonsoque', role: 'Miembro' },
      { name: 'Yesica Lorena Maya Garcia', role: 'Miembro' },
      { name: 'Andres Felipe Morales Vega', role: 'Miembro' },
      { name: 'Angie Viviana Rodriguez Montañez', role: 'Miembro' }
    ],
    heroImage: 'assets/ai-usage-statistics-1024x576.jpg',
    sections: [
      {
        heading: 'La Inteligencia Artificial en la Transformación del Conocimiento Contemporáneo',
        html: `<p>En las últimas décadas, la inteligencia artificial (IA) ha pasado de ser una aspiración conceptual a convertirse en un agente activo de transformación social y tecnológica. Este boletín, concebido como un espacio de reflexión informada, busca no solo presentar avances recientes, sino también situarlos dentro de un marco analítico que permita comprender mejor su impacto.</p>
        <p>Hoy, los sistemas inteligentes participan en procesos tan diversos como el diagnóstico clínico, la gestión de infraestructuras críticas y la creación de contenido digital a gran escala. Esta expansión plantea preguntas relevantes sobre ética, regulación y apropiación tecnológica, temas que abordamos a lo largo de estas secciones. Más que un simple compendio informativo, este documento pretende ser una invitación a explorar las dinámicas que configuran el ecosistema digital actual.</p>`
      },
      {
        heading: 'IA Generativa: Arquitecturas Emergentes y sus Implicaciones Socio-Tecnológicas',
        html: `<p>La consolidación de modelos generativos avanzados —particularmente aquellos basados en arquitecturas transformadoras— ha redefinido las fronteras de lo posible en materia de automatización cognitiva. Estas tecnologías, capaces de producir texto, imágenes, código e incluso simulaciones complejas, han introducido una nueva etapa en la interacción hombre-máquina.</p>
        <p>Más allá de su capacidad para generar contenido, la IA generativa está impulsando una reconfiguración profunda de los flujos productivos. Organizaciones de todos los sectores incorporan estos sistemas para optimizar tareas, reducir la carga operativa y enriquecer la toma de decisiones estratégicas. No obstante, este crecimiento rápido también exige revisar las condiciones de transparencia, interpretabilidad y equidad algorítmica. La pregunta ya no es si estas tecnologías transformarán la estructura del trabajo, sino cómo lo harán y bajo qué marcos conceptuales podremos analizarlas críticamente.</p>`
      },
      {
        heading: 'Indicadores de Adopción y Eficiencia: Una Mirada Basada en Evidencia',
        html: `<p>Diversos informes recientes revelan tendencias que permiten dimensionar con mayor claridad el alcance real de la inteligencia artificial en contextos organizacionales y educativos. Por ejemplo, una mayoría significativa de instituciones —alrededor del 68% según estimaciones globales— ya ha incorporado sistemas automatizados en, al menos, un proceso esencial. Este fenómeno refleja la madurez creciente del ecosistema tecnológico y la disminución progresiva de las barreras de entrada.</p>
        <p>Asimismo, estudios comparativos muestran que la adopción de flujos de trabajo asistidos por IA puede reducir tiempos operativos en un promedio del 40%, lo que evidencia una relación directa entre transformación digital y eficiencia estructural. Más aún, cerca del 74% de los profesionales encuestados manifiestan que el uso habitual de herramientas inteligentes incrementa sustancialmente su productividad personal.</p>
        <p>Aunque estas cifras parecen contundentes, deben interpretarse en diálogo con cuestiones críticas como la brecha digital, la accesibilidad y los desafíos emergentes en competencias laborales. Los datos, por sí solos, no explican el fenómeno; requieren análisis contextualizado.</p>

        <div class="figure">
          <img src="assets/estadistica.png" class="img-slide img-small" alt="Impacto de la IA en Colombia" />
          <p class="caption">Figura 1. Impacto de la IA en Educación Superior (Colombia).</p>
        </div>`
      },
      {
        heading: 'Integración de Sistemas Cognitivos: Un Acercamiento Práctico a la Automatización del Conocimiento',
        html: `<p>La aplicación de modelos avanzados de IA en escenarios reales ha demostrado que su valor trasciende la simple automatización de tareas rutinarias. Consideremos, por ejemplo, un sistema inteligente capaz de analizar grandes volúmenes de documentos, sintetizar información y elaborar informes detallados en cuestión de segundos. Estas soluciones, que hace apenas unos años eran objeto de investigación experimental, hoy se encuentran al alcance de instituciones y profesionales de múltiples disciplinas.</p>
        <p>Plataformas como ChatGPT, Gemini o Claude facilitan la integración de la IA en procesos diarios, permitiendo desde la generación de materiales educativos hasta la supervisión automatizada de datos críticos. Para quienes comienzan a explorar este campo, una recomendación fundamental consiste en iniciar con tareas acotadas: clasificación de información, redacción asistida o análisis preliminares. A medida que se adquiere dominio, es posible escalar hacia sistemas más complejos, siempre considerando principios éticos y metodológicos que garanticen un uso responsable.</p>`
      },
      {
        heading: 'Horizonte Tecnológico: Retos, Oportunidades y Renovación del Pensamiento Digital',
        html: `<p>Nos encontramos ante un escenario en el cual la inteligencia artificial no solo redefine procedimientos técnicos, sino que también exige repensar nuestra relación con el conocimiento, la creatividad y la resolución de problemas. El ritmo de innovación es tal que resulta imprescindible adoptar una postura crítica y, a la vez, propositiva frente a los cambios que esta tecnología impulsa en esferas educativas, industriales y sociales.</p>
        <p>El futuro inmediato demanda profesionales capaces de comprender la dinámica de los algoritmos y, simultáneamente, mantener una perspectiva ética que priorice la equidad y la transparencia. En este sentido, mantenerse actualizado, explorar nuevas herramientas y participar en comunidades de práctica se convierte en un imperativo formativo.</p>
        <p>Más que prever un final, la IA nos invita a reconocer un proceso continuo: una transformación abierta, compleja y profundamente humana, en la que cada usuario, investigador y desarrollador tiene un papel que desempeñar. El futuro no está escrito; está siendo modelado, capa por capa, por quienes deciden participar activamente en esta revolución cognitiva.</p>`
      }
    ] as ArticleSection[],
    sponsorLogos: [
      'assets/bluehost.svg',
      'assets/active-campaign.svg',
      'assets/designrush.svg',
      'assets/seeking-alpha.svg',
      'assets/research-com.svg'
    ]
  };

  addSection() {
    this.article.sections.push({ heading: '', html: '<p>New section content</p>' });
  }

  removeSection(i: number) {
    this.article.sections.splice(i, 1);
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  // Scroll to section by index
  scrollToSection(i: number) {
    const id = 'section-' + (i + 1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  }

  ngAfterViewInit(): void {
    // Observe sections to highlight active TOC item
    const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0, 0.1, 0.5] };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id || '';
          const match = id.match(/section-(\d+)/);
          if (match) {
            this.activeSection = parseInt(match[1], 10) - 1;
          }
        }
      });
    }, options);

    // attach to each section element
    this.article.sections.forEach((_, idx) => {
      const el = document.getElementById('section-' + (idx + 1));
      if (el && this.observer) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  // Generate initials (up to 3 letters) from full name
  getInitials(name: string) {
    if (!name) return '';
    const parts = name.split(/\s+/).filter(Boolean);
    const take = parts.slice(0, 3).map(p => p[0].toUpperCase());
    return take.join('');
  }

  // Simple deterministic gradient background using name hash
  getAvatarBg(name: string) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) { hash = name.charCodeAt(i) + ((hash << 5) - hash); }
    const h = Math.abs(hash) % 360;
    const h2 = (h + 40) % 360;
    return `linear-gradient(135deg, hsl(${h} 70% 45%), hsl(${h2} 65% 42%))`;
  }

  // Export current page to PDF via browser print dialog
  exportToPdf() {
    // Hide any ephemeral UI if needed via CSS @media print; just open print dialog
    window.print();
  }
}
