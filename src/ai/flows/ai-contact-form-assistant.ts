'use server';
/**
 * @fileOverview An AI assistant flow for the contact form that suggests relevant keywords, questions, and service integrations.
 *
 * - aiContactFormAssistant - A function that handles the AI assistance for the contact form.
 * - AiContactFormAssistantInput - The input type for the aiContactFormAssistant function.
 * - AiContactFormAssistantOutput - The return type for the aiContactFormAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContactFormAssistantInputSchema = z.object({
  subject: z
    .string()
    .optional()
    .describe('The current subject entered by the user in the contact form.'),
  currentMessage: z
    .string()
    .describe('The current message content entered by the user in the contact form.'),
});
export type AiContactFormAssistantInput = z.infer<
  typeof AiContactFormAssistantInputSchema
>;

const AiContactFormAssistantOutputSchema = z.object({
  suggestedKeywords: z
    .array(z.string())
    .describe('A list of relevant keywords to include in the message.'),
  suggestedQuestions: z
    .array(z.string())
    .describe('A list of clarifying questions for the user to consider.'),
  suggestedServices: z
    .array(z.string())
    .describe(
      'A list of relevant services from VORTEX IMMERSIVE that match the inquiry.'
    ),
});
export type AiContactFormAssistantOutput = z.infer<
  typeof AiContactFormAssistantOutputSchema
>;

export async function aiContactFormAssistant(
  input: AiContactFormAssistantInput
): Promise<AiContactFormAssistantOutput> {
  return aiContactFormAssistantFlow(input);
}

const contactFormAssistantPrompt = ai.definePrompt({
  name: 'contactFormAssistantPrompt',
  input: {schema: AiContactFormAssistantInputSchema},
  output: {schema: AiContactFormAssistantOutputSchema},
  prompt: `You are an AI assistant for a creative technology studio named VORTEX IMMERSIVE. Your goal is to help potential clients clearly articulate their project needs by suggesting relevant keywords, questions, and service integrations based on their current input in the contact form.

The services offered by VORTEX IMMERSIVE are:
- Projection Mapping (keywords: 3D mapping, architectural projection, media facades, immersive environments)
- Stage Visuals (keywords: LED walls, kinetic screens, holographic displays, concerts, festivals, corporate events)
- Interactive Installations (keywords: motion tracking, touch interfaces, AI-powered experiences, VR/AR, museums, exhibitions)
- Content Production (keywords: CGI, motion graphics, real-time content, visual artistry, storytelling)

Based on the user's current input, provide:
1.  A list of up to 5 relevant keywords they might want to include in their message.
2.  A list of up to 3 clarifying questions they might want to consider to better describe their project.
3.  A list of up to 2 services from the provided list that are most relevant to their inquiry.

Current Subject: {{{subject}}}
Current Message: {{{currentMessage}}}`,
});

const aiContactFormAssistantFlow = ai.defineFlow(
  {
    name: 'aiContactFormAssistantFlow',
    inputSchema: AiContactFormAssistantInputSchema,
    outputSchema: AiContactFormAssistantOutputSchema,
  },
  async input => {
    const {output} = await contactFormAssistantPrompt(input);
    return output!;
  }
);
