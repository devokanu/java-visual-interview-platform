import React, { useMemo, useState } from "react";
import { lessons } from "./data/lessons.js";

function App() {
  const [activeLessonId, setActiveLessonId] = useState("m0-l01");
  const [activeTab, setActiveTab] = useState("theory");
  const [activeStep, setActiveStep] = useState(0);
  const [replayKey, setReplayKey] = useState(0);
  const [rescueLevel, setRescueLevel] = useState(0);
  const [answer, setAnswer] = useState("");
  const [retryAnswer, setRetryAnswer] = useState("");
  const [softCheck, setSoftCheck] = useState(false);
  const [assessmentDone, setAssessmentDone] = useState(false);
  const [nextMessage, setNextMessage] = useState("");

  const lesson = useMemo(
    () => lessons.find((item) => item.id === activeLessonId) ?? lessons[0],
    [activeLessonId],
  );
  const step = lesson.steps[activeStep];
  const activeTabData = useMemo(
    () => lesson.tabs.find((tab) => tab.id === activeTab),
    [lesson, activeTab],
  );
  const isFinalStep = activeStep === lesson.steps.length - 1;

  function resetLessonState() {
    setActiveTab("theory");
    setActiveStep(0);
    setReplayKey((key) => key + 1);
    setRescueLevel(0);
    setAnswer("");
    setRetryAnswer("");
    setSoftCheck(false);
    setAssessmentDone(false);
    setNextMessage("");
  }

  function selectLesson(lessonId) {
    setActiveLessonId(lessonId);
    resetLessonState();
  }

  function goNextStep() {
    setActiveStep((current) => Math.min(current + 1, lesson.steps.length - 1));
  }

  function goBackStep() {
    setActiveStep((current) => Math.max(current - 1, 0));
  }

  function replayStep() {
    setReplayKey((key) => key + 1);
  }

  function handleAnswer(value) {
    setAnswer(value);
    setNextMessage("");
    if (value === lesson.assessment.correctValue) {
      setAssessmentDone(true);
      setSoftCheck(false);
    } else {
      setSoftCheck(true);
      setAssessmentDone(false);
    }
  }

  function handleRetry(value) {
    setRetryAnswer(value);
    setAssessmentDone(true);
  }

  function handleNextStep() {
    if (lesson.nextStep?.type === "lesson") {
      selectLesson(lesson.nextStep.targetLessonId);
      return;
    }

    setNextMessage(lesson.nextStep?.message ?? "");
  }

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="lesson-title">
        <div>
          <p className="eyebrow">{lesson.code}</p>
          <h1 id="lesson-title">{lesson.title}</h1>
          <p className="goal">{lesson.goal}</p>
          {lesson.bridgeText ? (
            <p className="bridge-note">{lesson.bridgeText}</p>
          ) : null}
        </div>
        <div className="lesson-meta" aria-label="Ders bilgileri">
          <span>{lesson.module}</span>
          <span>{lesson.duration}</span>
          <span>Adım {activeStep + 1} / {lesson.steps.length}</span>
        </div>
      </section>

      <nav className="tabs" role="tablist" aria-label="Ders sekmeleri">
        {lesson.tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            className={activeTab === tab.id ? "tab active" : "tab"}
            type="button"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <nav className="lesson-switcher" aria-label="Ders seçimi">
        {lessons.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === lesson.id ? "lesson-choice active" : "lesson-choice"}
            aria-current={item.id === lesson.id ? "page" : undefined}
            onClick={() => selectLesson(item.id)}
          >
            {item.code}
          </button>
        ))}
      </nav>

      <section className={activeTab === "code" ? "lesson-grid code-mode" : "lesson-grid"}>
        <div className="main-column">
          <div
            className="tab-panel"
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <TabContent tab={activeTabData} />
          </div>

          {activeTab === "code" ? (
            <CodePanel
              key={`code-${activeStep}-${replayKey}`}
              note={lesson.codeNote}
              fileName={lesson.codeFileName}
              lines={lesson.codeLines}
              activeLines={step.codeLines}
            />
          ) : null}

          <VisualStage
            key={`${activeStep}-${replayKey}`}
            lesson={lesson}
            step={step}
            activeStep={activeStep}
            replayKey={replayKey}
          />

          <StepControls
            activeStep={activeStep}
            totalSteps={lesson.steps.length}
            onBack={goBackStep}
            onNext={goNextStep}
            onReplay={replayStep}
          />
        </div>

        <aside className="side-column" aria-label="Aktif açıklama ve destek">
          <ConceptPanel step={step} />
          <RescuePanel
            rescue={lesson.rescue}
            rescueLevel={rescueLevel}
            setRescueLevel={setRescueLevel}
            setActiveStep={setActiveStep}
          />
        </aside>
      </section>

      <Assessment
        visible={isFinalStep}
        assessment={lesson.assessment}
        answer={answer}
        retryAnswer={retryAnswer}
        softCheck={softCheck}
        assessmentDone={assessmentDone}
        nextMessage={nextMessage}
        onAnswer={handleAnswer}
        onRetry={handleRetry}
        onNext={handleNextStep}
      />
    </main>
  );
}

function TabContent({ tab }) {
  return (
    <div>
      <h2>{tab.heading}</h2>
      {tab.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {tab.pairs ? (
        <dl className="concept-map" aria-label="Benzetme kavram eşlemesi">
          {tab.pairs.map(([scene, concept]) => (
            <div key={scene}>
              <dt>{scene}</dt>
              <dd>{concept}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {tab.prompt ? <blockquote>{tab.prompt}</blockquote> : null}
      {tab.depthLadder ? <DepthLadder items={tab.depthLadder} /> : null}
    </div>
  );
}

function DepthLadder({ items }) {
  return (
    <section className="depth-ladder" aria-label="Derinleşme yolu">
      <p className="eyebrow">Derinleşme Yolu</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function VisualStage({ lesson, step, activeStep, replayKey }) {
  if (lesson.visualType === "commandBoard") {
    return (
      <CommandBoardStage
        lesson={lesson}
        step={step}
        activeStep={activeStep}
        replayKey={replayKey}
      />
    );
  }

  if (lesson.visualType === "memoryBoxes") {
    return (
      <MemoryBoxesStage
        lesson={lesson}
        step={step}
        activeStep={activeStep}
        replayKey={replayKey}
      />
    );
  }

  if (lesson.visualType === "recipeError") {
    return (
      <RecipeErrorStage
        lesson={lesson}
        step={step}
        activeStep={activeStep}
        replayKey={replayKey}
      />
    );
  }

  if (lesson.visualType === "robot") {
    return (
      <RobotStage
        lesson={lesson}
        step={step}
        activeStep={activeStep}
        replayKey={replayKey}
      />
    );
  }

  const stageClass = `visual-stage replay-pulse step-${activeStep + 1}`;

  return (
    <section
      className={stageClass}
      aria-label={`Sandviç gişesi sahnesi. ${step.stageLabel}`}
      data-replay-key={replayKey}
      role="img"
    >
      <div className="stage-labels" aria-hidden="true">
        <span className={activeStep === 5 ? "lit" : ""}>client</span>
        <span className={activeStep === 5 ? "lit" : ""}>request</span>
        <span className={activeStep === 5 ? "lit" : ""}>server / backend</span>
        <span className={activeStep === 5 ? "lit" : ""}>response</span>
      </div>

      <div className="zone left-zone">
        <p className="zone-title">Ön taraf</p>
        <div className="person" aria-hidden="true">
          <span className="head" />
          <span className="body" />
        </div>
        <span className="zone-caption">Öğrenci / client</span>
      </div>

      <div className="zone counter-zone">
        <p className="counter-sign">GİŞE</p>
        <div className="glass" aria-hidden="true" />
        <div className="counter" aria-hidden="true" />
        <div className="speech-bubble">{step.bubble}</div>
        <div className="request-arrow" aria-hidden="true">istek</div>
        <div className="response-arrow" aria-hidden="true">cevap</div>
      </div>

      <div className="zone kitchen-zone">
        <p className="zone-title">Gizli mutfak</p>
        <div className="curtain" aria-hidden="true" />
        <div className="kitchen-light" aria-hidden="true" />
        <div className="workbench" aria-hidden="true">
          <span className="bread" />
          <span className="cheese" />
          <span className="rulebook">kural</span>
        </div>
        <div className="sandwich" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="zone-caption">server / backend</span>
      </div>
    </section>
  );
}

function CommandBoardStage({ lesson, step, activeStep, replayKey }) {
  const stageClass = `visual-stage replay-pulse command-board-stage board-step-${activeStep + 1}`;

  return (
    <section
      className={stageClass}
      aria-label={`Aydınlatmalı komut panosu sahnesi. ${step.stageLabel}`}
      data-replay-key={replayKey}
      role="img"
    >
      <div className="board-zone operator-zone">
        <p className="zone-title">Operatör</p>
        <div className="person operator" aria-hidden="true">
          <span className="head" />
          <span className="body" />
        </div>
        <button className="start-button" type="button" tabIndex={-1} aria-hidden="true">
          Başlat
        </button>
      </div>

      <div className="board-zone command-panel-zone">
        <p className="zone-title">Komut panosu</p>
        <ol className="board-commands" aria-label="Komut panosu satırları">
          {lesson.boardCommands.map((command, index) => (
            <li
              key={command}
              className={
                step.activeCommand === index ? "board-command active-command" : "board-command"
              }
            >
              <span className="lamp" aria-hidden="true" />
              <span className="command-text">{command}</span>
              {step.pointer === index + 1 ? (
                <span className="pointer" aria-hidden="true">➜</span>
              ) : null}
            </li>
          ))}
        </ol>
        {step.pointer === 0 || step.pointer === 4 ? (
          <span className={`pointer outside pointer-${step.pointer}`} aria-hidden="true">
            ➜
          </span>
        ) : null}
      </div>

      <div className="board-zone action-zone">
        <p className="zone-title">Eylem</p>
        <div className={`action-device action-${activeStep + 1}`} aria-hidden="true">
          <span className="device-light" />
          <span className="device-motor" />
          <span className="device-door" />
        </div>
        <span className="zone-caption">{step.action}</span>
      </div>
    </section>
  );
}

function MemoryBoxesStage({ lesson, step, activeStep, replayKey }) {
  const values = step.values ?? {};
  const stageClass = `visual-stage replay-pulse memory-stage memory-step-${activeStep + 1}`;

  return (
    <section
      className={stageClass}
      aria-label={`Etiketli saklama kutuları sahnesi. ${step.stageLabel}`}
      data-replay-key={replayKey}
      role="img"
    >
      <div className="memory-zone teacher-zone">
        <p className="zone-title">Kod kartı</p>
        <div className="teacher-card" aria-hidden="true">
          {step.command}
        </div>
      </div>

      <div className="memory-zone boxes-zone">
        <p className="zone-title">Bellek</p>
        <div className="storage-shelf" aria-label="Etiketli bellek kutuları">
          {lesson.boxes.map((box) => (
            <div
              key={box}
              className={
                step.activeBox === box || step.activeBox === "all"
                  ? "storage-box active-box"
                  : "storage-box"
              }
            >
              <span className="box-label">{box}</span>
              <span className={values[box] ? "value-card filled" : "value-card"}>
                {values[box] || "boş"}
              </span>
            </div>
          ))}
        </div>
        {activeStep === 5 ? <div className="trash-bin" aria-hidden="true">Ahmet</div> : null}
      </div>

      <div className="memory-zone output-zone">
        <p className="zone-title">Çıktı ekranı</p>
        <div className="output-screen" aria-hidden="true">
          {step.output || "bekliyor"}
        </div>
        {step.activeBox === "all" ? (
          <div className="memory-link" aria-hidden="true">
            KOD → BELLEK → VERİ
          </div>
        ) : null}
      </div>
    </section>
  );
}

function RecipeErrorStage({ lesson, step, activeStep, replayKey }) {
  const stageClass = `visual-stage replay-pulse recipe-stage recipe-step-${activeStep + 1} scene-${step.scene}`;

  return (
    <section
      className={stageClass}
      aria-label={`Eksik adımlı tarif kartı ve yapışkan not panosu sahnesi. ${step.stageLabel}`}
      data-replay-key={replayKey}
      role="img"
    >
      <div className="recipe-zone chef-zone">
        <p className="zone-title">Aşçı</p>
        <div className="chef" aria-hidden="true">
          <span className="chef-hat" />
          <span className="head" />
          <span className="body" />
        </div>
        <span className="zone-caption">sakin yürütücü</span>
      </div>

      <div className="recipe-zone recipe-card-zone">
        <p className="zone-title">Tarif kartı</p>
        <ol className="recipe-card" aria-label="Tarif satırları">
          {lesson.recipeLines.map((line, index) => (
            <li
              key={line}
              className={step.activeLine === index + 1 ? "recipe-line active-recipe-line" : "recipe-line"}
            >
              {line}
            </li>
          ))}
        </ol>
        <div className="sticky-board" aria-label="Yapışkan not panosu">
          {step.note ? <span className="sticky-note">{step.note}</span> : <span>not bekliyor</span>}
        </div>
      </div>

      <div className="recipe-zone kitchen-status-zone">
        <p className="zone-title">Mutfak</p>
        <div className="kitchen-mini" aria-hidden="true">
          <span className="pot" />
          <span className="salt" />
          <span className="taste-cup" />
        </div>
        <span className="zone-caption">{step.kitchen}</span>
        {step.scene === "summary" ? (
          <div className="error-summary" aria-hidden="true">
            <span>SYNTAX</span>
            <span>RUNTIME</span>
            <span>LOGIC</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function RobotStage({ lesson, step, activeStep, replayKey }) {
  const cards =
    step.activeCard === "contrast" ? lesson.contrastCards : lesson.commandCards;
  const stageClass = `visual-stage replay-pulse robot-stage robot-step-${activeStep + 1}`;

  return (
    <section
      className={stageClass}
      aria-label={`Komut kartlı robot sahnesi. ${step.stageLabel}`}
      data-replay-key={replayKey}
      role="img"
    >
      <div className="robot-zone programmer-zone">
        <p className="zone-title">Programcı</p>
        <div className="person programmer" aria-hidden="true">
          <span className="head" />
          <span className="body" />
          <span className="pen" />
        </div>
        <span className="zone-caption">komut yazan çocuk</span>
      </div>

      <div className="robot-zone deck-zone">
        <p className="zone-title">Program destesi</p>
        <ol className="command-deck" aria-label="Sıralı komut kartları">
          {cards.map((card, index) => (
            <li
              key={`${card}-${index}`}
              className={
                step.activeCard === index ||
                (step.activeCard === "contrast" && index === 0)
                  ? "command-card active-card"
                  : "command-card"
              }
            >
              {card}
            </li>
          ))}
        </ol>
        {step.activeCard === "contrast" ? (
          <div className="order-contrast" aria-hidden="true">
            Aynı kartlar, farklı sıra
          </div>
        ) : null}
      </div>

      <div className="robot-zone robot-exec-zone">
        <p className="zone-title">Robot</p>
        <div className={`robot ${step.robotPose}`} aria-hidden="true">
          <div className="robot-head">
            <span className="robot-eye" />
            <span className="robot-eye" />
          </div>
          <div className="robot-screen">{step.robotScreen}</div>
          <div className="robot-body" />
          <div className="robot-feet" />
        </div>
        <span className="zone-caption">okur ve uygular</span>
      </div>
    </section>
  );
}

function StepControls({ activeStep, totalSteps, onBack, onNext, onReplay }) {
  return (
    <div className="step-controls" aria-label="Görsel adım kontrolleri">
      <button
        type="button"
        onClick={onBack}
        disabled={activeStep === 0}
        aria-label="Bir önceki adıma dön"
      >
        Geri
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={activeStep === totalSteps - 1}
        aria-label="Sonraki görsel adıma geç"
        className="primary"
      >
        Sonraki Adım
      </button>
      <button
        type="button"
        onClick={onReplay}
        aria-label="Bu adımı tekrar izle"
      >
        Tekrar İzle
      </button>
    </div>
  );
}

function ConceptPanel({ step }) {
  return (
    <section className="concept-panel" aria-live="polite">
      <p className="eyebrow">Aktif kavram</p>
      <h2>{step.concept}</h2>
      <p>{step.sentence}</p>
    </section>
  );
}

function RescuePanel({ rescue, rescueLevel, setRescueLevel, setActiveStep }) {
  function openRescue() {
    setRescueLevel((level) =>
      level === 0 ? 1 : Math.min(level + 1, rescue.messages.length),
    );
    setActiveStep(0);
  }

  return (
    <section className="rescue-panel">
      <button type="button" onClick={openRescue} aria-label={rescue.ariaLabel}>
        {rescue.buttonLabel}
      </button>
      {rescueLevel > 0 ? (
        <div className="rescue-content" role="status">
          <p className="eyebrow">Kurtarma {rescueLevel}</p>
          <p>{rescue.messages[rescueLevel - 1]}</p>
        </div>
      ) : null}
    </section>
  );
}

function CodePanel({ note, fileName, lines, activeLines }) {
  return (
    <section className="code-panel" aria-label="Sahneyle eşleşen Java kodu">
      <div className="panel-heading">
        <p className="eyebrow">Kod eşleşmesi</p>
        <h2>{fileName}</h2>
        <p className="code-note">{note}</p>
      </div>
      <pre>
        <code>
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isActive = activeLines.includes(lineNumber);
            return (
              <span
                key={`${lineNumber}-${line}`}
                className={isActive ? "code-line active-line" : "code-line"}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="line-number">{String(lineNumber).padStart(2, "0")}</span>
                {line || " "}
              </span>
            );
          })}
        </code>
      </pre>
    </section>
  );
}

function Assessment({
  visible,
  assessment,
  answer,
  retryAnswer,
  softCheck,
  assessmentDone,
  nextMessage,
  onAnswer,
  onRetry,
  onNext,
}) {
  if (!visible) {
    return null;
  }

  const secondWrong =
    retryAnswer && retryAnswer !== assessment.correctValue;

  return (
    <section className="assessment" aria-label="Mikro değerlendirme">
      <div>
        <p className="eyebrow">{assessment.title}</p>
        {assessment.intro ? <p className="assessment-intro">{assessment.intro}</p> : null}
        <h2>{assessment.question}</h2>
      </div>
      <div className="answers" role="radiogroup" aria-label="Cevap seçenekleri">
        {assessment.options.map(([value, label]) => (
          <label key={value} className={answer === value ? "selected" : ""}>
            <input
              type="radio"
              name="assessment"
              value={value}
              checked={answer === value}
              onChange={() => onAnswer(value)}
            />
            {label}
          </label>
        ))}
      </div>

      {answer === assessment.correctValue ? (
        <p className="success" role="status">{assessment.success}</p>
      ) : null}

      {softCheck ? (
        <div className="soft-check" role="status">
          <h3>{assessment.softCheckTitle}</h3>
          <p>{assessment.softCheckExplanation}</p>
          <fieldset>
            <legend>{assessment.retryQuestion}</legend>
            <div className="answers retry">
              {assessment.retryOptions.map(([value, label]) => (
                <label key={value} className={retryAnswer === value ? "selected" : ""}>
                  <input
                    type="radio"
                    name="retry-assessment"
                    value={value}
                    checked={retryAnswer === value}
                    onChange={() => onRetry(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          {secondWrong ? (
            <p className="soft-reminder">{assessment.secondWrongReminder}</p>
          ) : null}
        </div>
      ) : null}

      {assessmentDone ? (
        <div className="next-step">
          <button type="button" className="primary" onClick={onNext}>
            Devam Et
          </button>
          {nextMessage ? <p role="status">{nextMessage}</p> : null}
          {secondWrong ? (
            <p className="next-reminder">{assessment.secondWrongReminder}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default App;
