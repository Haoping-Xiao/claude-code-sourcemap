// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx
// class=modified  jaccard=0.4124  score=0.5904  fileCov=0.5777
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jYl] deps: ft, S4, ZE, ii, fh, og, Fze, co, Uh, kt, Jt
UYl = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a test-runner agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since a significant piece of code was written, use the ${ss} tool to launch the test-runner agent to run the tests.
      </commentary>
      assistant: "Now let me use the test-runner agent to run the tests"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the ${ss} tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'test-runner', 'api-docs-writer', 'code-formatter')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.
`;
function GYl() {
  let { updateWizardData: e, goBack: t, goToStep: n, wizardData: r } = Eu(),
    [o, s] = Mse.useState(r.generationPrompt || ""),
    [i, a] = Mse.useState(!1),
    [l, c] = Mse.useState(null),
    [u, d] = Mse.useState(o.length),
    p = kH(),
    f = Mse.useRef(null),
    m = Mse.useCallback(() => {
      if (f.current) (f.current.abort(), (f.current = null), a(!1), c("Generation cancelled"));
    }, []);
  $r("confirm:no", m, {
    context: "Settings",
    isActive: i,
  });
  let g = Mse.useCallback(async () => {
    let _ = await K$(o);
    if (_.content !== null) (s(_.content), d(_.content.length));
  }, [o]);
  $r("chat:externalEditor", g, {
    context: "Chat",
    isActive: !i,
  });
  let h = Mse.useCallback(() => {
    (e({
      generationPrompt: "",
      agentType: "",
      systemPrompt: "",
      whenToUse: "",
      generatedAgent: void 0,
      wasGenerated: !1,
    }),
      s(""),
      c(null),
      t());
  }, [e, t]);
  $r("confirm:no", h, {
    context: "Settings",
    isActive: !i,
  });
  let y = async () => {
      let _ = o.trim();
      if (!_) {
        c("Please describe what the agent should do");
        return;
      }
      (c(null),
        a(!0),
        e({
          generationPrompt: _,
          isGenerating: !0,
        }));
      let S = Sl();
      f.current = S;
      try {
        let A = await FYl(_, p, [], S.signal);
        (e({
          agentType: A.identifier,
          whenToUse: A.whenToUse,
          systemPrompt: A.systemPrompt,
          generatedAgent: A,
          isGenerating: !1,
          wasGenerated: !0,
        }),
          n(6));
      } catch (A) {
        if (A instanceof tf);
        else if (A instanceof Error && !A.message.includes("No assistant message found"))
          c(A.message || "Failed to generate agent");
        e({
          isGenerating: !1,
        });
      } finally {
        (a(!1), (f.current = null));
      }
    },
    b =
      "Describe what this agent should do and when it should be used (be comprehensive for best results)";
  if (i)
    return s2.jsx(Pc, {
      subtitle: b,
      footerText: s2.jsx(mr, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel",
      }),
      children: s2.jsxs(U, {
        flexDirection: "row",
        alignItems: "center",
        children: [
          s2.jsx(Vu, {}),
          s2.jsx(w, {
            color: "suggestion",
            children: " Generating agent from description...",
          }),
        ],
      }),
    });
  return s2.jsx(Pc, {
    subtitle: b,
    footerText: s2.jsxs(Tn, {
      children: [
        s2.jsx(mr, {
          action: "confirm:yes",
          context: "Confirmation",
          fallback: "Enter",
          description: "submit",
        }),
        s2.jsx(mr, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor",
        }),
        s2.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    }),
    children: s2.jsxs(U, {
      flexDirection: "column",
      children: [
        l &&
          s2.jsx(U, {
            marginBottom: 1,
            children: s2.jsx(Va, {
              error: l,
            }),
          }),
        s2.jsx(Ta, {
          value: o,
          onChange: s,
          onSubmit: y,
          placeholder: "e.g., Help me write unit tests for my code...",
          columns: 80,
          cursorOffset: u,
          onChangeCursorOffset: d,
          focus: !0,
          showCursor: !0,
        }),
      ],
    }),
  });
}
var Mse, s2;
