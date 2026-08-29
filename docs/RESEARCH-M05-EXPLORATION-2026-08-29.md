# M05 design-exploration evidence supplement — 2026-08-29

Status: dated supporting evidence. This file is not Product or visual authority. Current authority remains in `VISITOR-JOURNEY.md`, `HERO-CONCEPTS-M05.md`, `FIRST-IMPRESSION-VALIDATION.md`, `HOMEPAGE.md`, and `DESIGN.md`.

## 1. Why the former A/C/D comparison was corrected

The previous M05 design compared three static Hero structures that shared the same H1, Product scenario, monitoring consequence, visual family, and most content. The remaining differences were primarily ordering/presentation.

That created a practical information-gain problem: a small qualitative sample could be spent distinguishing local layout variants without meaningfully challenging the underlying acquisition/mental-model thesis.

The correction is **not** `multiple prototypes are useless`. The evidence supports a narrower conclusion: multiple alternatives are valuable when they are meaningfully divergent; variant count is not itself the objective.

## 2. Parallel prototyping and alternative critique

### A — Dow et al., ACM TOCHI 2010

`Parallel prototyping leads to better design results, more divergence, and increased self-efficacy` compared parallel versus serial prototype creation. Parallel work produced more diverse prototypes and better final outcomes by the study's click-through/expert measures.

Sources:
- https://doi.org/10.1145/1879831.1879836
- https://hci.stanford.edu/publications/2010/parallel-prototyping/ParallelPrototyping2010-final.pdf

Bounded implication:

Maintain alternative concepts long enough to avoid premature fixation, but the alternatives must actually explore different solution paths.

### A — Tohidi et al., CHI 2006

`Getting the right design and the design right: Testing many is better than one` found that participants shown multiple functionally equivalent alternatives gave lower inflated ratings and more/stronger negative criticism than participants shown only one design.

Source:
- https://www.microsoft.com/en-us/research/publication/getting-the-design-right-and-the-right-design-testing-many-is-better-than-one/

Boundary:

The study supports alternative exposure as a way to improve critique. It does not show that three near-identical variants are better than two materially different directions, nor that users should design the solution for the team.

## 3. Design fixation from prototyping

### A — premature concept fixation, 2019

A controlled prototyping study reported premature commitment to concepts after building/testing and recommended defining critical tests before prototyping and using the lowest fidelity necessary for the question.

Source:
- https://www.sciencedirect.com/science/article/pii/S2212827119308935

Lunowa inference:

Define the mental-model oracle before investing in polish. Do not keep patching the first generated candidate merely because it already exists.

## 4. Generative AI and design fixation

### A — CHI 2024

Wadinambiarachchi et al., `The Effects of Generative AI on Design Fixation and Divergent Thinking`, ran a between-participants visual-ideation experiment with N=60. In that bounded task, access to an AI image generator led to higher design fixation on an initial example and lower fluency, variety, and originality than the no-support baseline.

Sources:
- https://doi.org/10.1145/3613904.3642919
- https://arxiv.org/abs/2403.11164

Boundary:

This is not a landing-page study and does not mean ImageGen should not be used. It does show that AI-generated visual inspiration can narrow exploration under some workflows.

Lunowa inference:

- do not produce `A version 1 -> A version 2 -> A version 3` and call that divergent exploration;
- do not derive every new direction by editing the same AI-generated image;
- create the baseline and dark-horse brief independently from Product/user evidence;
- critique generated output against the contract rather than letting the generated output redefine the contract.

## 5. Prototype fidelity

### A — Walker, Takayama, Landay 2002

A web-prototype experiment found low- and high-fidelity prototypes equally effective at uncovering usability issues in the studied task.

Source:
- https://journals.sagepub.com/doi/10.1177/154193120204600513

### A — Sauer & Sonderegger / Applied Ergonomics 2009

An empirical study manipulating prototype fidelity and aesthetics found that fidelity/aesthetics affected some performance/subjective/emotional outcomes.

Sources:
- https://pubmed.ncbi.nlm.nih.gov/18691696/
- https://www.sciencedirect.com/science/article/abs/pii/S0003687008001129

Bounded implication:

There is no universal `high fidelity is always better` rule. Fidelity should match the question.

Lunowa inference:

- low fidelity is appropriate for internal structural sanity checks;
- M05 participant-facing first-impression work includes category recognition, credibility, visual orientation and trust, so deliberately crude wireframes are insufficient as the only stimulus;
- use realistic mid/high-fidelity stimuli that remain inexpensive to revise.

## 6. Webpage prototypicality, aesthetics, and trust

### A — Miniukovich & Figl 2023

A study with 1,530 participants and more than 3,000 webpages found a strong effect/association of webpage prototypicality with trustworthiness, aesthetics and perceived pre-use usability. Prototypicality, aesthetics and usability together accounted for 29%-68% of trustworthiness variance depending on webpage category.

Sources:
- https://doi.org/10.1016/j.ijhcs.2023.103103
- https://www.sciencedirect.com/science/article/pii/S107158192300112X

A related 2024 open dataset contains more than 3,000 homepage screenshots and user evaluations.

Source:
- https://www.sciencedirect.com/science/article/pii/S2352340923010077

Lunowa inference:

A first-impression test that suppresses realistic aesthetics entirely cannot answer the complete trust/credibility question for the eventual marketing homepage.

## 7. Qualitative versus quantitative comparison

Current GOV.UK guidance distinguishes qualitative usability work for identifying common problems from A/B testing intended to estimate behavioral differences with sufficiently large samples.

Sources:
- https://www.gov.uk/guidance/usability-testing-qualitative-studies
- https://www.gov.uk/guidance/ab-testing-comparative-studies
- https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing

Lunowa inference:

M05 should diagnose wrong mental models and trust/orientation failures. It should not declare a statistical winner from a handful of participants.

## 8. Current design-process synthesis

Current preferred exploration sequence:

```text
Product truth + visitor mental-model oracle
        |
        v
internal low-fi structural reasoning
        |
        v
P: Product-Proof baseline       E: independently conceived dark horse
        \                       /
         realistic mid/high-fidelity stimuli
                    |
                    v
     small unaided comprehension research
                    |
          +---------+---------+
          |                   |
wrong model -> reject     eligible thesis
                              |
                     refine one direction
                              |
                 optional isolated motion test
                              |
                         M10 freeze
```

The design objective is not `maximize number of concepts`. It is `maximize decision-relevant learning before expensive refinement`.