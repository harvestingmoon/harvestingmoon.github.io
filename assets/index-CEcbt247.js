var gt=Object.defineProperty;var Re=t=>{throw TypeError(t)};var ft=(t,e,n)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>ft(t,typeof e!="symbol"?e+"":e,n),mt=(t,e,n)=>e.has(t)||Re("Cannot "+n);var Le=(t,e,n)=>e.has(t)?Re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var W=(t,e,n)=>(mt(t,e,"access private method"),n);import{r as Ke,g as Qe,a as kt}from"./vendor-BJsqeLoe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var pe={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function bt(){if(ze)return J;ze=1;var t=Ke(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(o,c,u){var d,h={},g=null,l=null;u!==void 0&&(g=""+u),c.key!==void 0&&(g=""+c.key),c.ref!==void 0&&(l=c.ref);for(d in c)r.call(c,d)&&!s.hasOwnProperty(d)&&(h[d]=c[d]);if(o&&o.defaultProps)for(d in c=o.defaultProps,c)h[d]===void 0&&(h[d]=c[d]);return{$$typeof:e,type:o,key:g,ref:l,props:h,_owner:i.current}}return J.Fragment=n,J.jsx=a,J.jsxs=a,J}var Ie;function xt(){return Ie||(Ie=1,pe.exports=bt()),pe.exports}var p=xt(),T=Ke();const wt=Qe(T);var ie={},De;function yt(){if(De)return ie;De=1;var t=kt();return ie.createRoot=t.createRoot,ie.hydrateRoot=t.hydrateRoot,ie}var vt=yt();const _t=Qe(vt),Pe=[{label:"email",href:"mailto:wenyeong21@gmail.com"},{label:"writing",href:"#/blog"},{label:"linkedin",href:"https://www.linkedin.com/in/wen-yeong-lee-979a01256/"},{label:"github",href:"https://github.com/harvestingmoon"}],St=[{id:1,name:"Tan Puay Siang and Kian Sing",org:"DSTA",note:"For giving me complete autonomy (and a team) to lead my own project and showcase it in NDP 2023, allowing me to showcase my work to top defence officials CE and also allowing me to interact with people like the Chief Defence Scientist."},{id:2,name:"Darren Tan",org:"NVIDIA AI Technology Center",note:"For giving me the opportunity to write my first research paper, introducing me to the world of research, and letting me try out the NeMo stack."},{id:3,name:"Zilu Wang",org:"TikTok",note:"For completely believing in me, encouraging me to make full use of AI agents and also allowing me to produce stuff that has impacted billions of people worldwide. Allowing me to participate in different projects to gain maximum exposure and experience. Also an extremely approachable mentor :)"},{id:4,name:"Rachel Deng",org:"TikTok",note:"Even though I was only a project management intern, I was given the task to explore and play around with different SOTA models, very supportive of my interests and encouraged me to go different teams too"},{id:5,name:"Haniffa",org:"Ministry Of Manpower",note:"Giving me the opportunity to join the AIBots team at MOM, allowing me to explore different ML techniques to solve issues within the agency"}],$t=[{id:1,title:"The FFT Was Optional: Replacing Evo 2's Convolutions with Linear-Time Recurrence",venue:"Accepted, ACML 2026 (not in proceedings)",authors:"Wen Yeong Lee (sole author)",link:"/papers/fft.pdf"},{id:2,title:"SkipFold: Test-Time Dynamic Depth for Scalable Biomolecular Inference",venue:"ICAANN 2026",authors:"Wen Yeong Lee, Darren Tan, Ian McLoughlin, Aik Beng Ng, Zhengkui Wang, Simon See",link:"/papers/skipfold.pdf"}],Tt=[{id:1,role:"Machine Learning Engineer Intern",org:"TikTok, Search Algorithms and Tako Team",period:"June 2025 – Feb 2026"},{id:2,role:"Project Management Intern",org:"TikTok, Trust & Safety",period:"January 2025 – June 2026"},{id:3,role:"AI Intern",org:"Ministry of Manpower, OSHD",period:"June 2024 – August 2024"},{id:4,role:"Computer Vision Intern",org:"DSTA",period:"2023"}],At="My interest in machine learning mainly lies in model efficiency like writing different kernels as well as exploring various different types of model architectures. I also enjoy various stuff like badminton (thx to my mum for introducing it to me at such a young age), football, running, cooking, travelling and food in general :)",Rt=[{id:1,title:"Flash-Attention in Metal-cpp",desc:"Architected a custom FlashAttention forward pass in metal-cpp using raw MSL kernels. Optimized memory bandwidth and compute utilization for Apple Silicon , 3.8× faster than MLX, 82× faster than PyTorch at 2048 tokens."},{id:2,title:"Person Re-Identification System",desc:"Constructed a multithreaded tracking system leveraging YOLO-NAS and a CTL model with ResNet-50 backbone for cross-camera identity matching 98% accuracy, multithreaded execution."},{id:3,title:"OBrainRot",desc:"Full-stack AI automation pipeline generating automated video content using Llama 3.3, VADER sentiment analysis, Coqui xTTSv2, and FFmpeg (116+ stars) on GitHub, Dockerized implementation."}];function Lt(){return p.jsxs("header",{style:{marginBottom:36},children:[p.jsx("img",{src:"/profile.png",alt:"Lee Wen Yeong",className:"profile-img"}),p.jsx("h1",{style:{fontSize:24,fontWeight:700,marginBottom:4},children:"Lee Wen Yeong"}),p.jsx("p",{style:{color:"var(--muted)",fontSize:14,marginBottom:14},children:"Undergraduate student at NUS"}),p.jsxs("p",{children:[p.jsx("strong",{children:"I am an incoming Member of Technical Staff (MTS) at ████████,"})," ","where I will be working on fast, production-grade model serving and inference. I am finishing a Business Analytics degree at ",p.jsx("strong",{children:"National University of Singapore"})," (School of Computing), which is completely unrelated to what I do now, and I enjoy it a lot nonetheless."]}),p.jsxs("p",{children:["I am currently a Research Assistant under the Cooperative Autonomous Systems group at"," ",p.jsx("a",{href:"https://cas.aifb.kit.edu/",target:"_blank",rel:"noopener noreferrer",children:"Karlsruhe Institute of Technology"}),", working with Wan Lei on memory efficient 4D Gaussian representations for dynamic driving environments."]}),p.jsx("p",{children:"At TikTok I progressed from a Trust & Safety Project Management Intern to a Machine Learning Engineer Intern in the Search Algorithms and Tako teams, working on ranking algorithms, AI agents and knowledge distillation. Before that I worked on computer vision at DSTA and LLMs at the Ministry of Manpower. I also contribute to open source, mostly PyTorch, SGLang and llama.cpp (I try my best)."}),p.jsxs("p",{children:["I also write about ML in general on"," ",p.jsx("a",{href:"https://t.me/qkvthoughts",target:"_blank",rel:"noopener noreferrer",children:"Telegram"}),"."]}),p.jsx("p",{style:{marginTop:16},children:Pe.map((t,e)=>p.jsxs("span",{children:[p.jsx("a",{href:t.href,target:t.href.startsWith("mailto")||t.href.startsWith("#")?void 0:"_blank",rel:"noopener noreferrer",children:t.label}),e<Pe.length-1&&p.jsx("span",{className:"sep",children:"/"})]},t.label))})]})}function zt(){return p.jsxs("section",{id:"interests",children:[p.jsx("h2",{children:"interests"}),p.jsx("p",{children:At})]})}function It(){return p.jsxs("section",{id:"mentors",children:[p.jsx("h2",{children:"previous mentors who guided me (thank you) "}),St.map(t=>p.jsxs("div",{className:"mentor-item",children:[p.jsxs("p",{style:{marginBottom:2},children:[p.jsx("span",{className:"name",children:t.name})," ",p.jsxs("span",{style:{color:"var(--muted)",fontSize:13},children:["(",t.org,")"]})]}),p.jsx("p",{style:{fontSize:14},children:t.note})]},t.id))]})}function Dt(){return p.jsxs("section",{id:"research",children:[p.jsx("h2",{children:"research"}),$t.map(t=>p.jsxs("div",{className:"research-item",children:[p.jsx("p",{style:{marginBottom:2},children:p.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"title",children:t.title})}),p.jsx("p",{className:"meta",children:t.authors}),p.jsx("p",{className:"meta",style:{fontStyle:"italic"},children:t.venue})]},t.id))]})}function Pt(){return p.jsxs("section",{id:"internships",children:[p.jsx("h2",{children:"previous internships"}),Tt.map(t=>p.jsxs("div",{className:"exp-item",children:[p.jsxs("p",{className:"meta",children:[p.jsx("span",{className:"org",children:t.org})," · ",t.period]}),p.jsx("p",{style:{fontWeight:600,marginBottom:2},children:t.role}),p.jsx("p",{style:{fontSize:14},children:t.desc})]},t.id))]})}function jt(){return p.jsxs("section",{id:"projects",children:[p.jsx("h2",{children:"projects"}),Rt.map(t=>p.jsx("div",{className:"proj-item",children:p.jsxs("p",{style:{marginBottom:2},children:[p.jsxs("span",{className:"title",children:[t.title,"."]})," ",p.jsx("span",{style:{fontSize:14},children:t.desc})]})},t.id))]})}const Bt="modulepreload",Et=function(t){return"/"+t},je={},Mt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Et(c),c in je)return;je[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Bt,u||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((g,l)=>{h.addEventListener("load",g),h.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Ct=`---\r
title: linear-time networks \r
date: 2026-11-23\r
summary: understanding variants of linear networks (and why we could learn something from them)\r
---\r
\r
## linear-time networks\r
\r
Linear networks are basically networks that aim to achieve linear time complexity, and of course there have been many different architectures that try to pull this off.\r
\r
To understand why anyone bothers chasing linear complexity when transformers already work so well, u just have to look at what happens when a prompt gets really long.\r
\r
Standard self attention compares every token against every previous token, which means compute scales quadratically and the KV cache grows exponentially with sequence length.\r
\r
![kv-cache vs context length](/posts/post_two/kvc.png)\r
\r
Once you push into hundreds of thousands or millions of tokens for coding agents and long documents, hauling that massive KV cache out of GPU memory for every single generated token turns into a brutal bandwidth bottleneck.\r
\r
Linear networks solve this by making a very simple trade: instead of keeping a transcript of every token ever seen, they compress the entire history into a fixed size recurrent state.\r
\r
![alt text](/posts/post_two/linear.png)\r
\r
Updating that state costs constant memory and constant compute per token during generation, giving you linear complexity across the whole sequence. \r
\r
Most modern LLMs nowadays now combine this with attention in a 3:1 (linear attn / quad attn) ratio\r
\r
Of course there are full linear time networks but researchers probably realised that having a hybrid formula is the best method (as of now)\r
\r
I will cover these types of different types of linear models, linked below here so you can click to whichever arch you feel most comfotable ++ their simple torch implementations\r
\r
(btw i am well aware of GRU but i will not include it because it is just a slightly different variant of RNN)\r
\r
1. [RNN](#rnn) (Elman, 1990)\r
2. [LSTM](#lstm) (Hochreiter and Schmidhuber, 1997)\r
3. [SSM](#ssm) (S4, Gu et al., Oct 2021)\r
4. [RWKV](#rwkv) (Peng et al., May 2023)\r
5. [Mamba (1, 2, 3)](#mamba-s6) (Mamba 1, Gu and Dao, Dec 2023; Mamba 2, May 2024; Mamba 3, Mar 2026)\r
6. [GLA](#gla) (Yang et al., Dec 2023)\r
7. [GDN (1 and 2)](#gdn) (GDN 1, Yang et al., Dec 2024; Gated DeltaNet 2, May 2026)\r
\r
## RNN\r
\r
Before Transformers took over everything, the classic Recurrent Neural Network popularized by Jeffrey Elman in his 1990 paper [Finding Structure in Time](https://papers.baulab.info/papers/Elman-1990.pdf) was the original blueprint for linear time sequence modeling. At the time he called it Simple Recurrent Networks (SRN)\r
\r
Instead of staring at the entire history of tokens at once, an SRN reads one token at a time and maintains a single hidden state vector that acts like a rolling summary of everything it has seen so far. (That explains the unfolding portion because it is repeating itself)\r
\r
![alt text](/posts/post_two/rnn.png)\r
\r
At every timestep, it simply takes the current input token, combines it with the previous hidden state through two learned weight matrices, and squashes the sum through a nonlinearity like tanh to produce the updated state. \r
\r
the image below is the original representation based on the research paper, but it a little hard to understand what is going on without the extra contexts so:\r
\r
![alt text](/posts/post_two/srn.png)\r
\r
Here is the pytorch implementation\r
\r
\`\`\`python\r
import torch\r
import torch.nn as nn\r
\r
class RNN(nn.Module):\r
    def __init__(self, d_in: int, d_hidden: int):\r
        super().__init__()\r
        self.d_hidden = d_hidden\r
        self.w_ih = nn.Linear(d_in, d_hidden)\r
        self.w_hh = nn.Linear(d_hidden, d_hidden, bias=False)\r
\r
    def forward(self, x: torch.Tensor) -> torch.Tensor:\r
        # x: (batch, seq_len, d_in)\r
        B, T, _ = x.shape\r
        h = torch.zeros(B, self.d_hidden, device=x.device, dtype=x.dtype)\r
        outputs = []\r
        for t in range(T):\r
            h = torch.tanh(self.w_ih(x[:, t]) + self.w_hh(h))\r
            outputs.append(h)\r
        return torch.stack(outputs, dim=1)\r
\`\`\`\r
The problem faced in RNN is that while cramming an entire sequence into a single fixed capacity hidden state gives you constant memory at inference, it creates severe mathematical and hardware bottlenecks during training. \r
\r
Because backpropagation through time repeatedly multiplies gradients across every step, small weights cause gradients to vanish and give the network amnesia over long dependencies, while large weights cause gradients to explode into unstable NaNs. \r
\r
![alt text](/posts/post_two/gradient.png)\r
\r
On top of that, standard RNNs only read left to right without future context, and because every step depends sequentially on the previous hidden state, GPUs cannot parallelize across time and are forced to crawl through long sequences one token at a time.\r
## LSTM\r
\r
After RNNs, we then evolved towards [LSTMs](https://deeplearning.cs.cmu.edu/S23/document/readings/LSTM.pdf), short for long short term memory, introduced by Sepp Hochreiter and Jurgen Schmidhuber in 1997 to stop vanilla RNNs from developing amnesia after thirty tokens. \r
\r
\r
The core problem with a standard RNN is that every single step multiplies the hidden state by the same weight matrix and squashes it through tanh, so early memories either decay exponentially into zero or blow up during backpropagation. \r
\r
\r
LSTMs fix this by adding a separate memory highway running straight across the top of the cell from $C_{t-1}$ to $C_t$, protected by three learned gates that look at the incoming token $X_t$ alongside the previous hidden state $H_{t-1}$ to regulate what stays and what goes.\r
\r
![alt text](/posts/post_two/lstm.png)\r
\r
Walking across the diagram from left to right, the forget gate $F_t$ passes the combined inputs through a sigmoid layer and multiplies elementwise with the old cell memory $C_{t-1}$ to decide what information gets wiped out. \r
\r
Next, the input gate $I_t$ (another sigmoid valve) teams up with a tanh layer creating candidate memory $\\tilde{C}_t$, multiplying them together before adding the result straight onto that top memory rail to form the updated cell state $C_t$. \r
\r
Finally, the output gate $O_t$ filters a tanh squashed version of the new cell state to produce the next hidden state $H_t$ passed onward to the rest of the network. \r
\r
Because updates along that upper $C_t$ rail are additive rather than purely multiplicative, gradients can flow backward across hundreds of timesteps without vanishing. \r
\r
Below is a general torch implementation on LSTMs\r
\r
\`\`\`python\r
import torch\r
import torch.nn as nn\r
\r
class LSTM(nn.Module):\r
    def __init__(self, d_in: int, d_hidden: int):\r
        super().__init__()\r
        self.d_hidden = d_hidden\r
        self.w_ih = nn.Linear(d_in, 4 * d_hidden)\r
        self.w_hh = nn.Linear(d_hidden, 4 * d_hidden, bias=False)\r
\r
    def forward(self, x: torch.Tensor) -> torch.Tensor:\r
        # x: (batch, seq_len, d_in)\r
        B, T, _ = x.shape\r
        h = torch.zeros(B, self.d_hidden, device=x.device, dtype=x.dtype)\r
        c = torch.zeros(B, self.d_hidden, device=x.device, dtype=x.dtype)\r
        outputs = []\r
        for t in range(T):\r
            gates = self.w_ih(x[:, t]) + self.w_hh(h)\r
            i, f, g, o = gates.chunk(4, dim=-1)\r
            i = torch.sigmoid(i)\r
            f = torch.sigmoid(f)\r
            g = torch.tanh(g)\r
            o = torch.sigmoid(o)\r
            c = f * c + i * g\r
            h = o * torch.tanh(c)\r
            outputs.append(h)\r
        return torch.stack(outputs, dim=1)\r
\r
\`\`\`\r
\r
Still, you can already spot the problem: all those sigmoid and tanh blocks sit right inside the recurrent loop, meaning LSTMs still force GPUs to march through sequences one token at a time during training.\r
\r
\r
## SSM \r
\r
For awhile, we mainly relied on LSTMs as linear time networks. Of course, many variants came out. \r
\r
This was the case until Albert Gu, Karan Goel, and Christopher Re introduced [Structured State Spaces (S4)](https://arxiv.org/pdf/2111.00396) in late 2021, borrowing a classic control theory equation from the 1960s and using a simple trade: rip the nonlinearities out of the recurrent loop completely.\r
\r
Without a tanh or sigmoid blocking every step, the hidden state update becomes a purely linear recurrence governed by fixed transition matrices initialized using a mathematical framework called [HiPPO](https://arxiv.org/pdf/2008.07669) so the state naturally compresses long histories without decaying into noise. \r
\r
At its core, SSM is governed by 2 equations\r
\r
$$h'(t) = A h(t) + B x(t)$$\r
$$y(t) = C h(t) + D x(t)$$\r
\r
The first equation updates the hidden memory state $h(t)$ by mixing the existing memory through matrix $A$ with the incoming signal $x(t)$ weighted by $B$, while the second equation reads out the relevant pieces through $C$ alongside a direct skip connection $D x(t)$. \r
\r
Because text arrives as discrete tokens rather than a smooth continuous wave, S4 discretizes $(A, B)$ using a step size $\\Delta$ into discrete step matrices $(\\overline{A}, \\overline{B})$, turning the system into a clean recurrence $h_t = \\overline{A} h_{t-1} + \\overline{B} x_t$.\r
\r
This can be visualized from this image (cudos to maarten grootendorst / gemini for this):\r
\r
![alt text](/posts/post_two/ssm_diag.png)\r
\r
Walking across the diagram from left to right, the incoming signal $x(t)$ splits onto two tracks. On the main lower track, $x(t)$ gets multiplied by the green input matrix $B$ to encode the new token, and is immediately summed with the previous memory coming out of the yellow feedback loop $A$, updating that central cyan grid labeled State Representation. \r
\r
That feedback loop is the beating heart of the state space model: at every stepd, matrix $A$ takes the existing cyan state representation, transforms how old memories decay or mix together, and feeds it right back into the summation node. To produce the actual prediction, the updated state is projected through the blue output matrix $C$, while the upper track multiplies the raw input $x(t)$ directly by the pink matrix $D$ as a resiual skip connection, summing both paths together to emit the final output\r
\r
That linearity unlocks a handy dual personality: at inference time, you step forward one token at a time using constant memory, whereas during training, you  unroll the recurrence into a single global convolution across the entire sequence in parallel. The catch is that computing that convolution filter naively for a dense HiPPO matrix $A$ would still blow up your GPU compute and memory.\r
\r
\r
Below is the KEY algorithm that I will focus on which enables S4 to run near-linear complexity during TRAINING mode:\r
\r
![alt text](/posts/post_two/training.png)\r
\r
Though it looks complicated, I will try my best to break it down as simple as possible for you (with reference to the top image of course).\r
\r
S4 splits its memory matrix into two easy parts: a simple grid of independent channels ($\\Lambda$) plus a tiny shared correction ($PQ^*$). From there, it builds the filter in five steps:\r
\r
1. **(Line 1):** First, we tell the math how long our sentence is ($L$) so the memory filter stops after $L$ tokens instead of stretching on forever.\r
\r
2. **(Line 2):** Instead of doing heavy matrix math one step at a time, we flip into frequency space and solve the simple independent channels ($\\Lambda$) all at once using a fast shortcut called a Cauchy kernel.\r
   \r
3. **(Line 3):** Those independent channels cannot talk to each other on their own, so we use a neat algebra shortcut (the Woodbury Identity) to patch the shared correction ($PQ^*$) back in without slowing anything down.\r
   \r
4. **(Line 4):** We evaluate that smooth frequency formula at $L$ evenly spaced points around a circle so it lines up cleanly with the $L$ tokens in our sentence.\r
   \r
5. **(Line 5):** Finally, we run an inverse Fast Fourier Transform (iFFT) to flip those frequency points back into a standard filter ($\\overline{K}$) that slides across your whole prompt in parallel[cite: 8].\r
\r
Once u have that filter $\\overline{K}$, training runs across all tokens simultaneously on the GPU, while during chat inference you just throw the filter away and step forward one token at a time using constant memory.\r
\r
I have also provided an image generated by Gemini to better visualize the core algo of S4\r
![alt text](/posts/post_two/g_new.png)\r
\r
Below is a simple torch implementation\r
\r
\`\`\`python\r
import torch\r
import torch.nn as nn\r
\r
class SSM(nn.Module):\r
    def __init__(self, d_model: int, d_state: int = 16):\r
        super().__init__()\r
        self.d_model = d_model\r
        self.d_state = d_state\r
        # Diagonal log-space state transition A (kept negative for stability)\r
        self.log_A = nn.Parameter(torch.randn(d_model, d_state))\r
        self.B = nn.Parameter(torch.randn(d_model, d_state) * 0.02)\r
        self.C = nn.Parameter(torch.randn(d_model, d_state) * 0.02)\r
        self.D = nn.Parameter(torch.ones(d_model))\r
\r
    def _get_discrete_params(self):\r
        # Discretized diagonal state decay in (0, 1)\r
        A_bar = torch.exp(-torch.exp(self.log_A))  # (D, N)\r
        return A_bar, self.B, self.C\r
\r
    def forward_parallel(self, x: torch.Tensor) -> torch.Tensor:\r
        # Parallel FFT convolution mode for training\r
        # x: (batch, seq_len, d_model)\r
        B_sz, T, D = x.shape\r
        A_bar, B_mat, C_mat = self._get_discrete_params()\r
\r
        # Build global convolution kernel K of length T: K[t] = sum_n C * (A^t) * B\r
        powers = torch.arange(T, device=x.device).view(1, 1, T)\r
        kernel = (C_mat * B_mat).unsqueeze(-1) * (A_bar.unsqueeze(-1) ** powers)\r
        kernel = kernel.sum(dim=1)  # (D, T)\r
\r
        # Convolve along sequence dimension via FFT\r
        fft_len = 2 * T\r
        x_f = torch.fft.rfft(x.transpose(1, 2), n=fft_len)\r
        k_f = torch.fft.rfft(kernel, n=fft_len)\r
        y = torch.fft.irfft(x_f * k_f.unsqueeze(0), n=fft_len)[..., :T]\r
        return y.transpose(1, 2) + x * self.D\r
\r
    def step_recurrent(self, x_t: torch.Tensor, state: torch.Tensor):\r
        # O(1) recurrent step mode for inference\r
        # x_t: (batch, d_model), state: (batch, d_model, d_state)\r
        A_bar, B_mat, C_mat = self._get_discrete_params()\r
        state = state * A_bar.unsqueeze(0) + x_t.unsqueeze(-1) * B_mat.unsqueeze(0)\r
        y_t = (state * C_mat.unsqueeze(0)).sum(dim=-1) + x_t * self.D\r
        return y_t, state\r
\`\`\`\r
\r
Though they are a better alternative, they have not really gained that much traction within the ML community, but have appeared in hybrid archs and slowly evolved into S6 / MAMBA\r
\r
## Mamba / S6 \r
\r
The successor of S4 is basically MAMBA, which was introduced as S6 by Albert Gu and Tri Dao in December 2023. S4 mainly used control theory, but the issue is that it treated every token sequence with the exact same static math rule, meaning it could not selectively ignore filler words or lock onto a specific clue from earlier in the prompt.\r
\r
S6 builds on top of this by using a selection mechanism that turns the core state space parameters ($\\Delta$, $B$, and $C$) into functions of the current input token itself. By making the step size $\\Delta$ data dependent, the model dynamically controls whether to reset its hidden state and absorb a crucial new token or hold onto its existing memory and breeze right past irrelevant noise. \r
\r
![alt text](/posts/post_two/s6.png)\r
\r
On the left, Algorithm 1 shows standard S4, where the parameters $B$, $C$, and the step size $\\Delta$ are fixed learned weights with shapes $(D, N)$ or $(D)$ that stay completely frozen across every token and batch. \r
\r
Because those numbers never change from one word to the next, S4 is time invariant, meaning u can unroll the math into a static global convolution during training. \r
\r
On the right, Algorithm 2 shows Mamba (S6), where those exact three parameters gain batch and sequence length dimensions $(B, L, N)$ or $(B, L, D)$ because they are now computed dynamically from the incoming token $x$ itself via linear projections $s_B(x)$, $s_C(x)$, and $s_\\Delta(x). \r
When Line 5 discretizes $A$ and $B$ using that token dependent $\\Delta$, the resulting transition matrices $\\overline{A}$ and $\\overline{B}$ become four dimensional tensors $(B, L, D, N)$ that adapt at every single timestep.\r
\r
Of course, making the transition matrices vary at every step breaks the time invariant property that let S4 use fast FFT convolutions, so they engineered a hardware aware parallel scan algorithm that loads those input dependent matrices directly into fast GPU SRAM, runs the associative recurrence in parallel without writing huge intermediate states back to slow HBM, and preserves true linear scaling alongside constant memory generation.\r
\r
\`\`\`python\r
import torch\r
import torch.nn as nn\r
import torch.nn.functional as F\r
\r
class SSM(nn.Module):\r
    def __init__(self, d_model: int, d_state: int = 16):\r
        super().__init__()\r
        self.d_model = d_model\r
        self.d_state = d_state\r
        # Static diagonal decay parameter A (kept negative for stability)\r
        self.log_A = nn.Parameter(torch.randn(d_model, d_state))\r
        # Input-dependent projections for step size delta, B, and C\r
        self.x_proj = nn.Linear(d_model, d_model + 2 * d_state, bias=False)\r
        self.D = nn.Parameter(torch.ones(d_model))\r
\r
    def forward(self, x: torch.Tensor) -> torch.Tensor:\r
        # x: (batch, seq_len, d_model)\r
        B_sz, T, D = x.shape\r
        A = -torch.exp(self.log_A)  # (D, N)\r
\r
        # Project input tokens into dynamic parameters (selection mechanism)\r
        delta_bc = self.x_proj(x)\r
        delta, B_dyn, C_dyn = torch.split(\r
            delta_bc, [D, self.d_state, self.d_state], dim=-1\r
        )\r
        delta = F.softplus(delta)  # (B_sz, T, D)\r
\r
        # Discretize A and B dynamically at every timestep\r
        # A_bar: (B_sz, T, D, N), B_bar: (B_sz, T, D, N)\r
        A_bar = torch.exp(delta.unsqueeze(-1) * A.unsqueeze(0).unsqueeze(0))\r
        B_bar = delta.unsqueeze(-1) * B_dyn.unsqueeze(2)\r
\r
        # Sequential scan rollout (replaced by SRAM parallel scan kernel in CUDA)\r
        state = torch.zeros(B_sz, D, self.d_state, device=x.device, dtype=x.dtype)\r
        outputs = []\r
        for t in range(T):\r
            state = A_bar[:, t] * state + B_bar[:, t] * x[:, t].unsqueeze(-1)\r
            y_t = (state * C_dyn[:, t].unsqueeze(1)).sum(dim=-1)\r
            outputs.append(y_t)\r
\r
        y = torch.stack(outputs, dim=1)\r
        return y + x * self.D\r
\r
\`\`\`\r
Over time, MAMBA evolved to include Mamba 2 and Mamba 3 with slightly varying differences that fixed S6's biggest hardware bottleneck.\r
\r
![alt text](/posts/post_two/mamba_diff.png)\r
\r
I will be using the image above as reference\r
\r
On the left, the **Mamba-1 Block** splits the input through two **Linear projections**, routing the main path through **Conv** and an activation (\`σ\`) to generate \`A\`, \`X\`, \`B\`, and \`C\` before feeding them into the **SSM**. While this gave the model content awareness, updating separate decay rates for every channel forced the GPU to rely on slow, custom parallel scans.\r
\r
In the middle, the **Mamba-2 Block** simplifies this flow via Structured State Space Duality (\`SSD\`), locking \`A\` to a single scalar per head so it can process chunks using fast matrix multiplications on GPU Tensor Cores before passing through normalization (\`N\`), multiplying (\`×\`) with the gated skip path (\`σ\`), and projecting out.\r
\r
On the right, the **Mamba-3 Block** swaps the standard convolution for a **MIMO projection** (shown in blue) and inserts a **RoPE** module with extra normalizations (\`N\`) and phase angles (\`Θ\`) directly onto \`B\` and \`C\`. These complex rotations track tricky state logic like parity while the Multi-Input Multi-Output projections pack far higher capacity into each head without increasing inference memory.\r
\r
#### But what is structured state space duality? \r
\r
**Structured State Space Duality (SSD)** simply proves that a selective state space model and masked linear attention are the exact same math viewed from two different angles.\r
\r
When Mamba-2 simplifies the state matrix $A$ down to a single scalar decay per head, the sequential state update collapses into a masked matrix multiplication $(L \\circ (Q K^\\top)) V$.\r
\r
This paper expands more on the idea of it https://arxiv.org/pdf/2510.04944\r
\r
That dual view lets the model switch between two modes at will: during training, it slices prompts into chunks and computes fast matrix multiplications on GPU Tensor Cores like a Transformer, and during inference, it flips back to stepping one token at a time with constant memory like an RNN.\r
\r
\r
## RWKV\r
\r
## GLA\r
\r
## GDN\r
`,qt=`---
title: an evolution of speculative decoding (nov 2026)
date: 2026-11-20
summary: me covering on spec decoding
---


## Speculative Decoding

I have always been reading up on interesting model architectures and one of the things that stood out to me the most is speculative decoding 


## An introduction to the problem 

To understand why speculative decoding exists, you first have to accept a slightly depressing truth about modern computing: we got very good at doing math, and considerably worse at moving the numbers around to actually do it.

If you run an LLM one token at a time (which is how autoregressive generation works btw) your GPU has to haul tens of gigabytes of model weights out of high-bandwidth memory just to produce a single word. The tensor cores finish their multiplication, and then spend the rest of the step sitting around like construction workers waiting for a single dump truck to back down a one-lane alley.

In computer architecture, this is called memory-bandwidth bound.

Speculative decoding is essentially a workaround for this exact bottleneck.

Instead of hauling all those weights just to produce one token, you use those idle tensor cores to verify several guessed tokens in a single trip.

## How it works 

There are many blogs that cover on speculative decoding so I wouldn't delve in much, though I highly suggest reading the one covered by vLLM 

https://vllm.ai/blog/2024-10-17-spec-decode

![alt text](/posts/post_one/image.png)

(vLLM image for reference)

In short, a smaller model predicts tokens while utilizing the same larger model to verify or adjust, it accelerates generation without sacrificing accuracy (or almost idk)

The smaller model (draft model we call it) efficiently generates multiple candidate tokens which can be verified in a single pass 

## The evolution of spec-decode

With that out of the way I want to talk about the different speculative decoding models that we have. 

\`\`\`
Note: I am not including the ones that are published in papers claiming to be SOTA (since they are just varients spun out from the important ones), but rather I want to include those that are widely used in the current industry including but not limited to the optimizers (with the exception of D3D because I find that interesting)
\`\`\`

## Blockwise Decoding (2018)

Before speculative decoding had a catchy name, Google proposed blockwise parallel decoding in 2018. The idea was attaching extra heads to predict multiple future tokens at once. It was clever, except it only worked for greedy decoding. The moment u wanted normal sampling, it broke the model's probability distribution. Interesting paper, mostly a dead end.

![alt text](/posts/post_one/blockwise.png)

https://arxiv.org/pdf/1811.03115

## Actual SpecDecode (2022)

The actual breakthrough came in November 2022, when Google Research (Leviathan et al., [arXiv:2211.17192](https://arxiv.org/pdf/2211.17192)) and DeepMind independently arrived at the same fix: modified rejection sampling

Their core insight was that even hard language modeling contains plenty of easy stretches like closing a quote or finishing obvious syntax, where a tiny draft model can guess several tokens ahead while the giant target model grades all of them in a single parallel pass. 

![alt text](/posts/post_one/specdecodealgo.png)

(algo as shown above)

If the draft model's probability for a token is lower than or equal to the target model's, u accept it if the draft model was overconfident, u reject it proportionally and resample from the adjusted residual distribution. This guarantees the final output distribution is 100 percent identical to running the big model alone, giving 2x to 3x speedups on T5 without retraining or touching a single weight. 


There was just one catch: in production, hosting two completely separate models meant juggling two KV caches, matching tokenizers, and burning extra VRAM. Naturally, engineers immediately set out to delete the second model.


## Medusa (2024)

Instead of hosting a separate draft model, Medusa bolted lightweight parallel heads directly onto the target model's last hidden state and verified candidate branches using tree attention. 

![alt text](/posts/post_one/medusa.png)

It proved you didn't need a standalone drafter, though because each head guessed blindly without seeing what the previous head picked, acceptance rates fell off a cliff after two or three tokens. But this variance itself is really dependent on the tree attention. Well there were optimizers introduced to actually fix some of the issues introduced but by then we were already moving on to other techniques. 

## EAGLE 1 2 and 3 (2024 to 2025)

Rather than guessing raw tokens from scratch, EAGLE runs a tiny autoregressive layer directly on the target model's internal hidden features. The intuition here is surprisingly practical: discrete token IDs jump unpredictably from word to word, whereas continuous hidden states right before the language modeling head evolve much more smoothly, making them far easier for a single lightweight layer to extrapolate.Later versions refined the plumbing even further: EAGLE 2 added confidence based dynamic draft trees so u spend more guesses on predictable stretches of text, while EAGLE 3 fused low, mid, and high level target features and trained directly on token prediction rather than feature regression, pushing real world speedups past 3x to 6x across vLLM and SGLang.

![alt text](/posts/post_one/e1.png)

By pairing the target model's feature vector with the embedding of the token that actually got sampled at that step, EAGLE removes the ambiguity of multiple competing branches and reuses the target's own frozen output head for free. 

Later versions refined the plumbing even further: EAGLE 2 added confidence based dynamic draft trees so u spend more guesses on predictable stretches of text

![alt text](/posts/post_one/eagle2.png)

![alt text](/posts/post_one/eagle3.png)

By EAGLE 3, fusing hidden features from multiple layers and training directly on token prediction pushed real world speedups past 3x to 6x.

\`\`\`
Note: I actually covered a bit more in depth on Medusa && EAGLE in my telegram channel so you can read more over here: https://t.me/qkvthoughts/1202
\`\`\`

Below is a compilation of the speeds across Vanilla to EAGLE-3

<video autoplay loop muted playsinline controls poster="/posts/post_one/e3.jpg">
  <source src="/posts/post_one/e3.webm" type="video/webm" />
  <source src="/posts/post_one/e3.mp4" type="video/mp4" />
</video>


As of Nov 2026, I am also well aware that there is EAGLE 3.1 (partnering vLLM, TorchSpec and EAGLE Team)

![alt text](/posts/post_one/eagle3.1.png)

The changes introduced is just RMSNorm after the FC layer as well as at the post norm hidden states feeding into the next decoding step.

Its main benefit is better training time, more robust context and better stability 

my guess is that the RMSNorm helps to put all the layers at the same numerical magnitude since deeper layers would naturally accumulate higher activation magnitudes then earlier layers -> so it would dominate the concat at the FC layer


![alt text](/posts/post_one/rms_norm.png)

Adding RMSNorm before hout also ensures that the next autoregressive step receiving the post-norm hidden state gets bounded (if not value accumulation again)


## MTP (2024 to 2025)

Frontier labs like DeepSeek and Qwen eventually stopped waiting for post training drafters and baked sequential multi token prediction modules straight into pretraining. 

Now this idea originally came out from a paper by [Gloeckle et al. (2024)](https://arxiv.org/pdf/2404.19737) at Meta, and the idea was fairly blunt: instead of training an LLM to predict just the next token and bolting on speculative heads afterward as an emergency patch, why not force the model to predict multiple future tokens at once during pretraining?

To pull this off without blowing up GPU memory, they used a shared transformer trunk feeding into independent output heads, running the forward and backward passes on each head sequentially so they never had to materialize all those massive vocabulary logits at the same time.

![alt text](/posts/post_one/mtp.png)

The side effects were surprisingly nice. Forcing a model to plan ahead actually made it smarter on code and algorithmic reasoning (solving around 15 percent more coding problems at the 13B scale), while giving u extra prediction heads for free self speculative decoding at inference time, hitting up to 3x speedups on code without needing a separate draft model.

Of course, nothing stays untouched for long. Meta's original version predicted future tokens in parallel from the shared trunk, which meant the heads still suffered from the classic conditional independence problem where head two couldn't see what head one actually picked.

Enter DeepSeek V3, which took inspiration from them and fixed the exact flaw that made parallel heads awkward.

DeepSeek realized that throwing away the causal chain between predicted tokens was leaving performance on the table. Instead of independent parallel heads, DeepSeek V3 makes MTP sequential and causal across D prediction depths, keeping the complete causal chain intact at every step.

Each MTP module is surprisingly lightweight because it shares both the embedding layer and the final output head with the main model. 

![alt text](/posts/post_one/deepseek_paper.png)

At prediction depth k, the module takes the hidden representation from the previous depth (starting with the main model's output at depth 1) alongside the embedding of the actual next token, normalizes both with RMSNorm, concatenates them, and squashes that doubled vector back down through a linear projection matrix before feeding it into a single transformer block. 

During training, the losses (Cross Entropy Loss) across all depths are averaged and scaled by a weighting factor lambda, it densifies training signals and forces the model to pre plan its representations. 

Interestingly, DeepSeek notes that keeping this causal chain is very similar in spirit to EAGLE, except DeepSeek built it primarily to make the base model smarter during pretraining rather than as an inference afterthought. Then once training finishes, you can either throw the MTP modules away completely for zero overhead serving, or keep them around as a ready made speculative draft head without ever training a separate model.
(psss basically DSpark)

## DFlash, DSpark, and DFlash 2 (2026)

At the end, even a single layer drafter is still autoregressive. If you want a 12 token draft, that little layer still has to run 12 sequential forward passes while the big model stands around waiting.

![alt text](/posts/post_one/dflash.png)

**DFlash** broke that habit in February 2026 by replacing sequential drafting with a lightweight block diffusion drafter. Instead of stepping token by token, it denoises an entire block of masked tokens in parallel in a single forward pass while injecting target KV features into the draft layers. Drafting latency suddenly stopped scaling linearly with block size.

Predicting a whole block at once introduced a new quirk though: because tokens are denoised simultaneously, adjacent tokens occasionally disagree with each other. 

**DSpark** patched this by adding a low rank Markov head to restore neighbor coherence alongside a confidence head that stops drafting early when certainty drops.

![alt text](/posts/post_one/dspark.png)

A more in depth explanation can be found on my tele channel (because im too lazy to write the iteration here) (https://t.me/qkvthoughts/1041)

**DFlash 2** tackled the same problem without giving up one pass parallel drafting, and it uses tiny two tap dynamic depthwise convolutions wrapped before and after every attention and MLP sublayer inside the drafter.

![alt text](/posts/post_one/dflash2.png)

Instead of paying for ten extra layers, DFlash 2 inserts a local two tap dynamic convolution around every sublayer. At each position t, a small projection of the current hidden state generates two input dependent weights on the fly: one weight for the token slot itself, and one weight for the immediate predecessor at position t minus 1 (with the very first draft slot peeking directly at the last verified anchor token).

Pair that with a lightweight pairwise path selector that keeps each slot's top candidates and traces the single most coherent chain before verification, and you get over 20 percent more accepted output per verification pass for roughly 1 percent extra cycle latency. More of it is actually explained in inco's blog (https://inco.ai/blog/dflash2/)



## D3D (Nov 2026)

What makes D3D so compelling is not any single algorithmic miracle, because none of its three pieces are particularly on their own, so its 3 async pipelines working in tandem (in a sense)

### 1. Standalone Target-Aligned Training

![alt text](/posts/post_one/drafter_training.png)

To eliminate the drafter's runtime dependency on the target model's hidden states, D3D trains a standalone diffusion drafter directly on target-generated responses.

During training, a response is split into blocks where the model sees clean prefix tokens alongside a block of \`[MASK]\` tokens and learns to denoise all masked positions simultaneously in one forward pass. 

Because a standalone drafter must maintain its own KV cache across long sequences without the target model periodically resetting its features, pure block diffusion can drift over time 

D3D prevents this by adding an auxiliary next-token prediction (NTP) loss on the clean prefix tokens so internal representations stay grounded, while training on target-sampled outputs aligns its phrasing and formatting with the target model.

### 2. Acceptance-Driven Layer Pruning & Self-Distillation
![alt text](/posts/post_one/prunning.png)

Rather than dropping transformer layers based on standard perplexity or cosine similarity which often degrades speculative acceptance disproportionately, D3D evaluates the actual validation acceptance length when removing each layer and greedily drops the layers with the smallest impact (trimming a 36-layer drafter down to 31 layers while preserving over 99% of its accepted length).

Immediately afterward, it runs lightweight self-distillation using the unpruned drafter as a teacher to recover any lost token-prediction sharpness without adding latency back.

### 3. Asynchronous Packed Speculative Inference
With the target model on \`GPU 0\` and the standalone D3D drafter on \`GPU 1\`, both accelerators run concurrently instead of taking turns. 

![alt text](/posts/post_one/async.png)

While \`GPU 0\` is busy verifying a block of $B$ candidate tokens, \`GPU 1\` does not yet know how many tokens will be accepted ($1, 2, \\dots,$ or $B+1$), so it packs multiple candidate continuation prefix corresponding to those possible acceptance lengths into a single batched forward pass using a custom block-causal attention mask. 

The moment \`GPU 0\` finishes verification and reveals the exact accepted prefix, \`GPU 1\` already has the matching next draft block ready for immediate handover while simultaneously kicking off pre-drafting for the subsequent round.


With that, I think thats all the spec decoding i can come up with so far, hope you enjoyed this blog and ill probably update it occasionally. (If i have the time of course)

Here's a meme 
![alt text](/posts/post_one/meme.jpg)

## References

- **Blockwise Parallel Decoding** (Stern, Shazeer, Uszkoreit, Kaiser, Google 2018) ([arXiv:1811.03115](https://arxiv.org/abs/1811.03115))
- **Fast Inference from Transformers via Speculative Decoding** (Leviathan, Kalman, Matias, Google Research 2022) ([arXiv:2211.17192](https://arxiv.org/abs/2211.17192))
- **Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads** (Cai et al. 2024) ([arXiv:2401.10774](https://arxiv.org/abs/2401.10774), [code](https://github.com/FasterDecoding/Medusa))
- **EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty** (Li, Wei, Zhang, Zhang 2024) ([arXiv:2401.15077](https://arxiv.org/abs/2401.15077))
- **EAGLE-2: Faster Inference of Language Models with Dynamic Draft Trees** (Li et al. 2024) ([arXiv:2406.16858](https://arxiv.org/abs/2406.16858))
- **EAGLE-3: Scaling up Inference Acceleration via Training-Time Test** (Li et al. 2025) ([arXiv:2503.01840](https://arxiv.org/abs/2503.01840), [code](https://github.com/SafeAILab/EAGLE))
- **EAGLE 3.1** (EAGLE, vLLM and TorchSpec teams 2026) ([lightseek.org blog](https://lightseek.org/blog/eagle-3-1.html))
- **Better & Faster Large Language Models via Multi-token Prediction** (Gloeckle et al., Meta 2024) ([arXiv:2404.19737](https://arxiv.org/abs/2404.19737))
- **DeepSeek-V3 Technical Report** (DeepSeek-AI 2024) ([arXiv:2412.19437](https://arxiv.org/abs/2412.19437))
- **DFlash: Block Diffusion for Flash Speculative Decoding** (Chen, Liang, Liu 2026) ([arXiv:2602.06036](https://arxiv.org/abs/2602.06036), [code](https://github.com/z-lab/dflash))
- **DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation** (Cheng et al. 2026) ([arXiv:2607.05147](https://arxiv.org/abs/2607.05147))
- **DFlash 2: Keep Drafting Parallel** (Inco AI 2026) ([inco.ai/blog/dflash2](https://inco.ai/blog/dflash2/))
- **D3D: Decoupled Diffusion Drafting for Asynchronous Speculative Decoding** (Chen et al. 2026) ([arXiv:2611.06425](https://arxiv.org/abs/2611.06425), [code](https://github.com/fudan-generative-vision/D3D))
- **vLLM spec decode explainer** (vLLM 2024) ([vllm.ai/blog/2024-10-17-spec-decode](https://vllm.ai/blog/2024-10-17-spec-decode))

`;function ke(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var O=ke();function Ve(t){O=t}var M={exec:()=>null};function E(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=e[r];return i||(i=t(r),e[r]=i),i}}function k(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(i,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(S.caret,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}var Je=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),S={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,listInterruptsParagraph:/^ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)(\t[ \t]*)/gm,nestedBlockMarker:/^ {0,3}(?:(?:[*+-]|\d{1,9}[.)])(?: |$)|> ?)/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:E(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:E(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:E(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:E(t=>new RegExp(`^ {0,${t}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:E(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:E(t=>new RegExp(`^ {0,${t}}(?:</?(?:${xe})(?:[ \\t]+|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:E(t=>new RegExp(`^ {0,${t}}>`)),nestedContainerMarkers:/^(?: {0,3}(?:(?:[*+-]|\d{1,9}[.)])[ \t]+|>[ \t]?))+/},Nt=/^(?:[ \t]*(?:\n|$))+/,Ot=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ft=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,te=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,be=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,xe="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ne=k(" {0,3}(?:</?(?:tag)(?:[ \\t]+|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",xe).getRegex(),Ye=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,et=k(Ye).replace(/bull/g,be).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/\|table/g,"").replace(/html/g,ne).getRegex(),Wt=k(Ye).replace(/bull/g,be).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).replace(/html/g,ne).getRegex(),we=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Zt=/^[^\n]+/,ye=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,Ht=k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<(?:\\.|[^\n<>\\])*>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ye).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),Ut=k(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,be).getRegex(),ve=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xt=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*?[ \\t]*/?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ve).replace("tag",xe).replace("attribute",/[ \t]+[a-zA-Z:_][\w.:-]*(?:[ \t]*=[ \t]*"[^"\n]*"|[ \t]*=[ \t]*'[^'\n]*'|[ \t]*=[ \t]*[^\s"'=<>`]+)?/).getRegex(),tt=t=>k(we).replace("hr",te).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html",ne).getRegex(),Kt=tt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Qt=tt(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Vt=k(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",Qt).getRegex(),_e={blockquote:Vt,code:Ot,def:Ht,fences:Ft,heading:Gt,hr:te,html:Xt,lheading:et,list:Ut,newline:Nt,paragraph:Kt,table:M,text:Zt},Be=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",te).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html",ne).getRegex(),Jt={..._e,lheading:Wt,table:Be,paragraph:k(we).replace("hr",te).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Be).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html",ne).getRegex()},Yt={..._e,html:k(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",ve).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:M,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(we).replace("hr",te).replace("heading",` *#{1,6} *[^
]`).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").replace("lheading",et).getRegex()},en=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,tn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,nt=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,nn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,D=/[\p{P}\p{S}]/u,H=/[\s\p{P}\p{S}]/u,re=/[^\s\p{P}\p{S}]/u,rn=k(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,H).getRegex(),sn=/[\p{Pi}\p{Ps}"']/u,rt=/(?!~)[\p{P}\p{S}]/u,an=/(?!~)[\s\p{P}\p{S}]/u,on=/(?:[^\s\p{P}\p{S}]|~)/u,ln=k(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Je?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),it=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,cn=k(it,"u").replace(/punct/g,D).getRegex(),hn=k(it,"u").replace(/punct/g,rt).getRegex(),dn=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,pn=k(dn,"u").replace(/openQuote/g,sn).replace(/punct/g,D).getRegex(),st="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",un=k(st,"gu").replace(/notPunctSpace/g,re).replace(/punctSpace/g,H).replace(/punct/g,D).getRegex(),gn=k(st,"gu").replace(/notPunctSpace/g,on).replace(/punctSpace/g,an).replace(/punct/g,rt).getRegex(),fn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",mn=k(fn,"gu").replace(/notPunctSpace/g,re).replace(/punctSpace/g,H).replace(/punct/g,D).getRegex(),kn=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,re).replace(/punctSpace/g,H).replace(/punct/g,D).getRegex(),bn="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",xn=k(bn,"gu").replace(/notPunctSpace/g,re).replace(/punctSpace/g,H).replace(/punct/g,D).getRegex(),wn=k(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,D).getRegex(),yn="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",vn=k(yn,"gu").replace(/notPunctSpace/g,re).replace(/punctSpace/g,H).replace(/punct/g,D).getRegex(),_n=k(/\\(punct)/,"gu").replace(/punct/g,D).getRegex(),Sn=k(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,D).getRegex(),$n=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Tn=k(ve).replace("(?:-->|$)","-->").getRegex(),An=k("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Tn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),at=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,le=k(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",at).getRegex(),Rn=k(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",le).replace("href",/<(?:\\.|[^\n<>\\])*>|(?!<)[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),Ln=k(/^!?\[(label)\]\[(ref)\]/).replace("label",le).replace("ref",ye).getRegex(),zn=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",ye).getRegex(),Ee=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,In=k(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",at).getRegex(),Dn=k("reflink|nolink(?!\\()","g").replace("reflink",k(/^!?\[(label)\]\[(ref)\]/).replace("label",In).replace("ref",Ee).getRegex()).replace("nolink",k(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ee).getRegex()).getRegex(),Me=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Pn=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,jn=k(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,Pn).getRegex(),Se={_backpedal:M,anyPunctuation:_n,anyPunctuationOutsideCode:Sn,autolink:$n,blockSkip:ln,br:nt,code:tn,del:M,delLDelim:M,delRDelim:M,emStrongLDelim:cn,emStrongRDelimAst:un,emStrongRDelimUnd:kn,escape:en,link:Rn,nolink:zn,punctuation:rn,reflink:Ln,reflinkSearch:Dn,tag:An,text:nn,url:M},Bn={...Se,emStrongLDelim:pn,emStrongRDelimAst:mn,emStrongRDelimUnd:xn,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",le).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",le).getRegex()},ge={...Se,emStrongRDelimAst:gn,emStrongLDelim:hn,delLDelim:wn,delRDelim:vn,url:k(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",jn).replace("protocol",Me).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:k(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Me).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",Je?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},En={...ge,br:k(nt).replace("{2,}","*").getRegex(),text:k(ge.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},se={normal:_e,gfm:Jt,pedantic:Yt},Y={normal:Se,gfm:ge,breaks:En,pedantic:Bn},Mn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ce=t=>Mn[t];function $(t,e){if(e){if(S.escapeTest.test(t))return t.replace(S.escapeReplace,Ce)}else if(S.escapeTestNoEncode.test(t))return t.replace(S.escapeReplaceNoEncode,Ce);return t}function Cn(t){return S.numericCharacterReference.test(t)?t.replace(S.numericCharacterReferenceOrAmpersand,(e,n,r)=>{if(n===void 0&&r===void 0)return"&amp;";let i=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return i===0||i>1114111||i>=55296&&i<=57343?"�":i===38?"&amp;":String.fromCodePoint(i)}):t}function qe(t){try{t=encodeURI(t).replace(S.percentDecode,"%")}catch{return null}return t}function Ne(t,e){var s;let n=t.replace(S.findPipe,(a,o,c)=>{let u=!1,d=o;for(;--d>=0&&c[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(S.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!((s=r.at(-1))!=null&&s.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(S.slashPipe,"|");return r}function P(t,e,n){let r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function Oe(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&S.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function ce(t){return t.trim().replace(S.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function Fe(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}var Z=new WeakMap;function $e(t){let e={"*":-1,_:-1},n=-1,r=t.length;for(let i=0;i<r;i++){let s=t[i];if(s!=="*"&&s!=="_"&&s!=="~")continue;let a=i===0?`
`:t[i-1],o=i+1;for(;o<r&&t[o]===s;)o++;a!==" "&&a!=="	"&&a!==`
`&&a!=="\r"&&a!=="\f"&&(s==="~"?n=i:e[s]=i),i=o-1}return{maskedSrc:t,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:n}}function qn(t,e){let n=$e(e),r=Z.get(t);r?r.push(n):Z.set(t,[n])}function Nn(t){let e=Z.get(t);e&&(e.pop(),e.length===0&&Z.delete(t))}function ot(t,e,n){var i;let r=(i=Z.get(t))==null?void 0:i.at(-1);return r&&r.maskedSrc===e?r.lastPossibleEmStrongCloserIndex[n]:$e(e).lastPossibleEmStrongCloserIndex[n]}function lt(t,e){var r;let n=(r=Z.get(t))==null?void 0:r.at(-1);return n&&n.maskedSrc===e?n.lastPossibleDelCloserIndex:$e(e).lastPossibleDelCloserIndex}function ae(t,e=0){let n=e,r="";for(let i of t)if(i==="	"){let s=4-n%4;r+=" ".repeat(s),n+=s}else r+=i,n++;return r}function On(t,e){let n="";for(let r=0;r<t.length;r++){if(t[r]==="`"){let i=e.inline.code.exec(t.slice(r));if(i){n+=i[0],r+=i[0].length-1;continue}}if(t[r]==="\\"&&(t[r+1]==="["||t[r+1]==="]")){n+=t[r+1],r++;continue}n+=t[r]}return n}function Ge(t,e,n,r,i){let s=e.href,a=e.title||null,o=On(t[1],i),c=t[0].charAt(0)==="!",u=r.state.inLink,d=r.state.linkEmitted,h=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let g=r.inlineTokens(o),l=r.state.linkEmitted;if(r.state.linkEmitted=d,r.state.inLink=u,!c){if(l){r.state.inRawBlock=h;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:s,title:a,text:o,tokens:g}}function Fn(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let i=r[1];return e.split(`
`).map(s=>{let a=s.match(n.other.beginningSpace);if(a===null)return s;let[o]=a;return s.slice(Math.min(o.length,i.length))}).join(`
`)}function We(t,e,n,r){if(!e.includes("<"))return!1;for(let i=0;i<e.length;i++){if(e[i]==="\\"){i++;continue}if(e[i]==="`"){let o=r.inline.code.exec(e.slice(i));if(o){i+=o[0].length-1;continue}}if(e[i]!=="<")continue;let s=t.slice(n+i),a=r.inline.tag.exec(s)||r.inline.autolink.exec(s);if(a){if(a[0].length>e.length-i)return!0;i+=a[0].length-1}}return!1}var C=class{constructor(t){w(this,"options");w(this,"rules");w(this,"lexer");this.options=t||O}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Oe(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Fn(n,e[3]||"",this.rules);return e[3]!==void 0&&(r===""||r.endsWith(`
`))&&(r+=`
`),{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=P(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:P(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:P(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=P(e[0],`
`).split(`
`),r="",i="",s=[];for(;n.length>0;){let a=!1,o=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))o.push(n[c]),a=!0;else if(!a)o.push(n[c]);else break;n=n.slice(c);let u=o.join(`
`),d=u.replace(this.rules.other.blockquoteMarkerWhitespace,(l,f,m)=>m.startsWith(" ")?f+" "+m.slice(1):f+ae(m,f.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,i=i?`${i}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=h,n.length===0)break;let g=s.at(-1);if((g==null?void 0:g.type)==="code"||(g==null?void 0:g.type)==="heading"||(g==null?void 0:g.type)==="hr"||(g==null?void 0:g.type)==="html"||(g==null?void 0:g.type)==="table")break;if((g==null?void 0:g.type)==="blockquote"){let l=g,f=n.join(`
`),m=l.raw+`
`+f.replace(this.rules.other.blockquoteSetextReplace2,""),b=this.blockquote(m);s[s.length-1]=b;let x=m.substring(b.raw.length).replace(/^\n/,""),v=x?x.split(`
`).length:0,R=v?n.slice(0,-v):n;if(R.length>0&&(r=`${r}
${R.join(`
`)}`),i=i.substring(0,i.length-l.text.length)+b.text,n=n.slice(R.length),n.length>0&&this.rules.other.blockquoteStart.test(n[0]))continue;break}else if((g==null?void 0:g.type)==="list"){let l=g,f=l.raw+`
`+n.join(`
`),m=this.list(f);s[s.length-1]=m;let b=m.raw.length>l.raw.length?f.slice(l.raw.length+1,m.raw.length).split(`
`).length:0;if(b>0){let x=n.slice(0,b).join(`
`);r=`${r}
${x}`,i=`${i}
${x}`}if(n=n.slice(b),n.length>0&&!this.rules.other.blockquoteStart.test(n[0]))break;continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(t){var n;let e=this.rules.block.list.exec(t);if(e){if(!this.options.pedantic&&((n=this.lexer.state.lastToken)==null?void 0:n.type)==="text"&&!this.rules.other.listInterruptsParagraph.test(t))return;let r=t,i=()=>r.length-t.length,s=e[1].trim(),a=s.length>1,o={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");let c=this.rules.other.listItemRegex(s),u=!1;for(;t;){let g=!1,l="";if(!(e=c.exec(t))||this.rules.block.hr.test(t))break;let f=i();t=t.substring(e[0].length);let m=e[2].split(`
`,1)[0],b=e[1].length,x=this.options.pedantic?ae(m,b):m.replace(this.rules.other.leadingSpaceTab,X=>ae(X,b)),v=t.split(`
`,1)[0],R=!x.trim(),_=0;if(this.options.pedantic?(_=2,l=x.trimStart()):R?_=b+1:(_=x.search(this.rules.other.nonSpaceChar),_=_>4?1:_,l=x.slice(_),_+=b),R&&this.rules.other.blankLine.test(v)&&(t=t.substring(v.length+1),g=!0),!g){let X=this.rules.other.nextBulletRegex(_),K=this.rules.other.hrRegex(_),B=this.rules.other.fencesBeginRegex(_),Q=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(_):this.rules.other.headingBeginRegex(_),V=this.rules.other.htmlBeginRegex(_),pt=this.rules.other.blockquoteBeginRegex(_),de=!1;for(;t;){let Ae=t.split(`
`,1)[0],F;if(v=Ae,this.options.pedantic?(v=v.replace(this.rules.other.listReplaceNesting,"  "),F=v):F=v.replace(this.rules.other.leadingSpaceTab,A=>ae(A)),B.test(v)||Q.test(v)||V.test(v)||pt.test(v)||X.test(v)||K.test(v))break;if(F.search(this.rules.other.nonSpaceChar)>=_||!v.trim())l+=`
`+F.slice(_),de=!1;else{if(R)break;let A=x;if(!this.options.pedantic&&!l.includes(`
`)&&!x.includes("	")){let G;for(;!K.test(A)&&(G=this.rules.other.nestedBlockMarker.exec(A));)A=A.slice(G[0].length);if(!A.trim())break}if(A.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(A)||Q.test(A)||V.test(A)||K.test(A))break;if(!this.options.pedantic&&!de){let G=x.replace(this.rules.other.nestedContainerMarkers,"");if(this.rules.block.fences.test(G)||this.rules.block.heading.test(G)||this.rules.block.hr.test(G))break}let ut=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(v)&&this.rules.block.lheading.test(`${x}
${v}`)?`    ${F.replace(/^ {0,3}/,"")}`:v;l+=`
`+ut,de=!0}R=!v.trim(),t=t.substring(Ae.length+1),x=F.slice(_)}}let U=r.slice(f,i());o.loose||(u?o.loose=!0:this.rules.other.doubleBlankLine.test(U)&&(u=!0)),o.items.push({type:"list_item",raw:U,task:!!this.options.gfm&&this.rules.other.listIsTask.test(l),loose:!1,text:l,tokens:[]})}let d=o.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;o.raw=r.slice(0,i()).trimEnd();let h=[];for(let g of o.items)if(this.lexer.state.top=!1,h.push(this.lexer.inlineQueue.length),g.tokens=this.lexer.blockTokens(g.text,[]),!o.loose){let l=g.tokens.filter(m=>m.type==="space"),f=l.length>0&&l.some(m=>this.rules.other.anyLine.test(m.raw));o.loose=f}for(let g=0;g<o.items.length;g++){let l=o.items[g],f=l.tokens[0];if(l.task&&((f==null?void 0:f.type)==="text"||(f==null?void 0:f.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),f.raw=f.raw.replace(this.rules.other.listReplaceTask,""),f.text=f.text.replace(this.rules.other.listReplaceTask,"");let m=this.lexer.inlineQueue;for(let x=h[g];x<m.length;x++)if(m[x].tokens===f.tokens){m[x].src=m[x].src.replace(this.rules.other.listReplaceTask,"");break}let b=this.rules.other.listTaskCheckbox.exec(l.raw);if(b){let x={type:"checkbox",raw:b[0]+" ",checked:b[0]!=="[ ]"};l.checked=x.checked,o.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=x.raw+l.tokens[0].raw,l.tokens[0].text=x.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(x)):l.tokens.unshift({type:"paragraph",raw:x.raw,text:x.raw,tokens:[x]}):l.tokens.unshift(x)}}else l.task&&(l.task=!1)}if(o.loose)for(let g of o.items){g.loose=!0;for(let l of g.tokens)l.type==="text"&&(l.type="paragraph")}return o}}html(t){var n;let e=this.rules.block.html.exec(t);if(e){if(((n=this.lexer.state.lastToken)==null?void 0:n.type)==="paragraph"&&!this.rules.other.htmlBeginRegex(4).test(t))return;let r=Oe(e[0]);return{type:"html",block:!0,raw:r,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:r}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&Fe(e[2],"()")!==-1)return;let n=ce(e[1]),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:P(e[0],`
`),href:r,title:i}}}table(t){var a;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Ne(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:P(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<n.length;o++)s.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(Ne(o,s.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:s.align[u]})));return s}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:P(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){if(t.charCodeAt(0)!==92)return;let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){if(t.charCodeAt(0)!==60)return;let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=t.charCodeAt(0);if(e!==91&&e!==33)return;let n=this.rules.inline.link.exec(t);if(n){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&We(t,n[1],r,this.rules))return;let i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let c=P(i.slice(0,-1),"\\");if((i.length-c.length)%2===0)return}else{let c=Fe(n[2],"()");if(c===-2)return;if(c>-1){let u=(n[0].indexOf("!")===0?5:4)+n[1].length+c;n[2]=n[2].substring(0,c),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let s=P(n[0].slice(0,-1),"\\");if((n[0].length-s.length)%2===0)return;let a=n[2],o="";if(this.options.pedantic){let c=this.rules.other.pedanticHrefTitle.exec(a);c&&(a=c[1],o=c[3])}else o=n[3]?n[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?a=a.slice(1):a=a.slice(1,-1)),Ge(n,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,e){let n=t.charCodeAt(0);if(n!==91&&n!==33)return;let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let i=r[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&We(t,r[1],i,this.rules))return;let s=e[ce(r[2]||r[1])];if(!s){let a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Ge(r,s,r[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],s=n===i,a=e.length-t.length,o=a;for(;!this.options.pedantic&&o>0&&e[o-1]===i;)o--;let c=[...e.slice(Math.max(0,o-2),o)].at(-1)??"",u=c==="*"||c==="_"||!!this.rules.inline.punctuation.exec(c);o<a&&(n=c);let d=o<a?u:n==="*"||n==="_"||!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let h=r[1]||r[3]||"";if(!h||!n||d){let g=[...r[0]].length-1,l,f,m=g,b=0,x=a-o+g,v=!this.options.pedantic&&!!c.trim()&&(!!h||i==="*"&&!u);if(i!=="*"&&i!=="_")return;let R=i==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,_=ot(this,e,i),U=e.length-t.length+g;if(_<U)return;e=e.slice(-1*t.length+g);let X=_-U;for(R.lastIndex=0;(r=R.exec(e))!==null&&!(r.index>X);){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(f=[...l].length,r[3]||r[4]){m+=f;continue}else if((r[5]||r[6]||v)&&x%3&&!((x+f)%3)){if(s&&(r[5]||r[6]))break;b+=f;continue}if(m-=f,m>0)continue;f=Math.min(f,f+m+b);let K=[...r[0]][0].length,B=t.slice(0,g+r.index+K+f);if(Math.min(g,f)%2){let V=B.slice(1,-1);return{type:"em",raw:B,text:V,tokens:this.lexer.inlineTokens(V)}}let Q=B.slice(2,-2);return{type:"strong",raw:B,text:Q,tokens:this.lexer.inlineTokens(Q)}}}}codespan(t){if(t.charCodeAt(0)!==96)return;let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=t.charCodeAt(0);if(e!==32&&e!==92&&e!==10)return;let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t,e,n=""){if(t.charCodeAt(0)!==126)return;let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,s,a,o=i,c=this.rules.inline.delRDelim,u=lt(this,e),d=e.length-t.length+i;if(u<d)return;e=e.slice(-1*t.length+i);let h=u-d;for(c.lastIndex=0;(r=c.exec(e))!==null&&!(r.index>h);){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s||(a=[...s].length,a!==i))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let g=[...r[0]][0].length,l=t.slice(0,i+r.index+g+a),f=l.slice(i,-i);return{type:"del",raw:l,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(t){if(t.charCodeAt(0)!==60)return;let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,i;if(e[2]==="@")r=e[0],i="mailto:"+r;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);r=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,autolink:!0,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:Cn(e[0]),escaped:n}}}},I,ct,fe,ht,dt,q,L=(q=class{constructor(e){Le(this,I);w(this,"tokens");w(this,"options");w(this,"state");w(this,"inlineQueue");w(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||O,this.options.tokenizer=this.options.tokenizer||new C,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:S,block:se.normal,inline:Y.normal};this.options.pedantic?(n.block=se.pedantic,n.inline=Y.pedantic):this.options.gfm&&(n.block=se.gfm,this.options.breaks?n.inline=Y.breaks:n.inline=Y.gfm),this.tokenizer.rules=n}static get rules(){return{block:se,inline:Y}}static lex(e,n){return new q(n).lex(e)}static lexInline(e,n){return new q(n).inlineTokens(e)}lex(e){e=e.replace(S.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.state.inRawBlock=!1,this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var c,u,d;this.tokenizer.lexer=this;let i=this.state.lastToken;this.options.pedantic&&(e=e.replace(S.tabCharGlobal,"    ").replace(S.spaceLine,""));let s=1/0,a,o=this.options.gfm&&!this.options.pedantic&&this.tokenizer.paragraph===C.prototype.paragraph;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}this.state.lastToken=n.at(-1);let h;if((u=(c=this.options.extensions)==null?void 0:c.block)!=null&&u.some(l=>(h=l.call({lexer:this},e,n))?(e=e.substring(h.raw.length),n.push(h),!0):!1))continue;if(h=this.tokenizer.space(e)){e=e.substring(h.raw.length);let l=n.at(-1);h.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(h);continue}if(h=this.tokenizer.code(e)){e=e.substring(h.raw.length);let l=n.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+h.raw,l.text+=`
`+h.text,this.inlineQueue.at(-1).src=l.text):n.push(h);continue}if(h=this.tokenizer.fences(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.heading(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.hr(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.blockquote(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.list(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.html(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.def(e)){e=e.substring(h.raw.length);let l=n.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+h.raw,l.text+=`
`+h.raw,this.inlineQueue.at(-1).src=l.text):(this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title}),n.push(h));continue}if(h=this.tokenizer.table(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.lheading(e)){e=e.substring(h.raw.length),n.push(h);continue}let g=e;if((d=this.options.extensions)!=null&&d.startBlock){let l=1/0,f=e.slice(1),m;this.options.extensions.startBlock.forEach(b=>{m=b.call({lexer:this},f),typeof m=="number"&&m>=0&&(l=Math.min(l,m))}),l<1/0&&l>=0&&(g=e.substring(0,l+1))}if(this.state.top&&(h=this.tokenizer.paragraph(g))){let l=n.at(-1);(r||l===a&&o)&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+h.raw,l.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text,a=l):(n.push(h),a=h),r=g.length!==e.length,e=e.substring(h.raw.length);continue}if(h=this.tokenizer.text(e)){e=e.substring(h.raw.length);let l=n.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+h.raw,l.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(h);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,this.state.lastToken=i,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let i=r[0],s=i.lastIndexOf("[");if(!(i.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,ce(i.slice(s+1,-1))))&&!(s>1&&this.linkInText(i.slice(1,s-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=e.includes(")");try{return W(this,I,ct).call(this,e,n)}finally{this.state.linkParenPossible=r}}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},I=new WeakSet,ct=function(e,n){var s;let r=e.includes("*")||e.includes("_")||e.includes("~"),i=r||(s=this.options.hooks)!=null&&s.emStrongMask||this.tokenizer.emStrong!==C.prototype.emStrong||this.tokenizer.del!==C.prototype.del?W(this,I,dt).call(this,e):e;if(!r)return W(this,I,fe).call(this,e,i,n);qn(this.tokenizer,i);try{return W(this,I,fe).call(this,e,i,n)}finally{Nn(this.tokenizer)}},fe=function(e,n,r){var o,c,u;let i=!1,s="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}i||(s=""),i=!1;let d;if((c=(o=this.options.extensions)==null?void 0:o.inline)!=null&&c.some(l=>(d=l.call({lexer:this},e,r))?(e=e.substring(d.raw.length),r.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let l=r.at(-1);d.type==="text"&&(l==null?void 0:l.type)==="text"?(l.raw+=d.raw,l.text+=d.text):r.push(d);continue}let h=e[0];if(h==="*"||h==="_"){let l=n.length-e.length;if(ot(this.tokenizer,n,h)<=l){let f=1;for(;f<e.length&&e.charCodeAt(f)===h.charCodeAt(0);)f++;let m=e.substring(0,f),b=r.at(-1);(b==null?void 0:b.type)==="text"&&!b.escaped?(b.raw+=m,b.text+=m):r.push({type:"text",raw:m,text:m,escaped:!1}),e=e.substring(f),s=h,i=!0;continue}}else if(h==="~"){let l=n.length-e.length;if(lt(this.tokenizer,n)<=l){let f=1;for(;f<e.length&&e.charCodeAt(f)===126;)f++;let m=e.substring(0,f),b=r.at(-1);(b==null?void 0:b.type)==="text"&&!b.escaped?(b.raw+=m,b.text+=m):r.push({type:"text",raw:m,text:m,escaped:!1}),e=e.substring(f),s=h,i=!0;continue}}if(d=this.tokenizer.emStrong(e,n,s)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.del(e,n,s)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),r.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),r.push(d);continue}let g=e;if((u=this.options.extensions)!=null&&u.startInline){let l=1/0,f=e.slice(1),m;this.options.extensions.startInline.forEach(b=>{m=b.call({lexer:this},f),typeof m=="number"&&m>=0&&(l=Math.min(l,m))}),l<1/0&&l>=0&&(g=e.substring(0,l+1))}if(d=this.tokenizer.inlineText(g)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(s=d.raw.slice(-1)),i=!0;let l=r.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=d.raw,l.text+=d.text):r.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return r},ht=function(e){let{blockSkip:n,tag:r,autolink:i}=this.tokenizer.rules.inline,s="",a=0,o;for(n.lastIndex=0;o=n.exec(e);){let c=o.index+(o[2]?o[2].length:0),u=o.index+o[0].length;if(e.charAt(c)==="<"){let d=e.slice(c),h=r.exec(d)||i.exec(d);if(!h){n.lastIndex=c+1;continue}u=c+h[0].length,n.lastIndex=u}s+=e.slice(a,c)+"["+"a".repeat(u-c-2)+"]",a=u}return s+e.slice(a)},dt=function(e){var r,i;let n=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,a=o=>{let c=o.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,ce(o.slice(c+1,-1))))return o;if(c>1&&o.charAt(0)!=="!"){let u=o.slice(1,c-1);if(this.linkInText(u))return"["+u.replace(s,a)+"]["+"a".repeat(o.length-c-2)+"]"}return"["+"a".repeat(o.length-2)+"]"};n=n.replace(s,a)}return n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(s,a,o)=>o?"+".repeat(s.length):a?a+s.slice(a.length,-a.length).replace(/`/g,"+")+a:s),n=W(this,I,ht).call(this,n),n=((i=(r=this.options.hooks)==null?void 0:r.emStrongMask)==null?void 0:i.call({lexer:this},n))??n,n},q),he=class{constructor(t){w(this,"options");w(this,"parser");this.options=t||O}space(t){return""}code({text:t,lang:e,escaped:n}){var s;let r=(s=(e||"").match(S.notSpaceStart))==null?void 0:s[0],i=t?t.replace(S.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+$(r)+'">'+(n?i:$(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:$(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,r="";for(let a=0;a<t.items.length;a++){let o=t.items[a];r+=this.listitem(o)}let i=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let i=0;i<t.header.length;i++)n+=this.tablecell(t.header[i]);e+=this.tablerow({text:n});let r="";for(let i=0;i<t.rows.length;i++){let s=t.rows[i];n="";for(let a=0;a<s.length;a++)n+=this.tablecell(s[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${$(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:i}){let s=i?$(n,!0):this.parser.parseInline(r),a=qe(t);if(a===null)return s;t=$(a,i);let o='<a href="'+t+'"';return e&&(o+=' title="'+$(e)+'"'),o+=">"+s+"</a>",o}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=qe(t);if(i===null)return $(n);t=i;let s=`<img src="${$(t)}" alt="${$(n)}"`;return e&&(s+=` title="${$(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:$(t.text)}},Te=class{constructor(){w(this,"parser")}strong({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}em({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}codespan({text:t}){return t}del({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}html({text:t}){return t}text({text:t}){return t}link({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}image({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}br(){return`
`}checkbox({raw:t}){return t}},z=class me{constructor(e){w(this,"options");w(this,"renderer");w(this,"textRenderer");this.options=e||O,this.options.renderer=this.options.renderer||new he,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Te,this.textRenderer.parser=this}static parse(e,n){return new me(n).parse(e)}static parseInline(e,n){return new me(n).parseInline(e)}parse(e){var r,i;this.renderer.parser=this;let n="";for(let s=0;s<e.length;s++){let a=e[s];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){let c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(c.type)){n+=u===!1?"":u??"";continue}}let o=a;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,n=this.renderer){var i,s;this.renderer.parser=this;let r="";for(let a=0;a<e.length;a++){let o=e[a];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[o.type]){let u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(o.type)){r+=u===!1?"":u??"";continue}}let c=o;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"checkbox":{r+=n.checkbox(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},oe,ee=(oe=class{constructor(t){w(this,"options");w(this,"block");this.options=t||O}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?L.lex:L.lexInline}provideParser(t=this.block){return t?z.parse:z.parseInline}},w(oe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),w(oe,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),oe);function j(t,e){if(Array.isArray(e))for(let n=0;n<e.length;n++)t.push(e[n]);else t.push(e)}var Gn=class{constructor(...t){w(this,"defaults",ke());w(this,"options",this.setOptions);w(this,"parse",this.parseMarkdown(!0));w(this,"parseInline",this.parseMarkdown(!1));w(this,"Parser",z);w(this,"Renderer",he);w(this,"TextRenderer",Te);w(this,"Lexer",L);w(this,"Tokenizer",C);w(this,"Hooks",ee);this.use(...t)}walkTokens(t,e){var r,i;let n=[];for(let s of t)switch(j(n,e.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)j(n,this.walkTokens(o.tokens,e));for(let o of a.rows)for(let c of o)j(n,this.walkTokens(c.tokens,e));break}case"list":{let a=s;j(n,this.walkTokens(a.items,e));break}default:{let a=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let c=a[o].flat(1/0);j(n,this.walkTokens(c,e))}):a.tokens&&j(n,this.walkTokens(a.tokens,e))}}return n}use(...t){let e=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),n.renderer){let i=this.defaults.renderer||new he(this.defaults);for(let s in n.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,o=n.renderer[a],c=i[a];i[a]=(...u)=>{let d=o.apply(i,u);return d===!1&&(d=c.apply(i,u)),d===!1?"":d??""}}r.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new C(this.defaults);for(let s in n.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,o=n.tokenizer[a],c=i[a];i[a]=(...u)=>{let d=o.apply(i,u);return d===!1&&(d=c.apply(i,u)),d}}r.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new ee;for(let s in n.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,o=n.hooks[a],c=i[a];ee.passThroughHooks.has(s)?i[a]=u=>{if(i.options.async&&ee.passThroughHooksRespectAsync.has(s))return(async()=>{let h=await o.call(i,u);return c.call(i,h)})();let d=o.call(i,u);return c.call(i,d)}:i[a]=(...u)=>{if(i.options.async)return(async()=>{let h=await o.apply(i,u);return h===!1&&(h=await c.apply(i,u)),h})();let d=o.apply(i,u);return d===!1&&(d=c.apply(i,u)),d}}r.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(a){let o=[];return j(o,s.call(this,a)),i&&j(o,i.call(this,a)),o}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return L.lex(t,e??this.defaults)}parser(t,e){return z.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},i={...this.defaults,...r},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=t),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,o=await(i.hooks?await i.hooks.provideLexer(t):t?L.lex:L.lexInline)(a,i),c=i.hooks?await i.hooks.processAllTokens(o):o;i.walkTokens&&await Promise.all(this.walkTokens(c,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser(t):t?z.parse:z.parseInline)(c,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer(t):t?L.lex:L.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let o=(i.hooks?i.hooks.provideParser(t):t?z.parse:z.parseInline)(a,i);return i.hooks&&(o=i.hooks.postprocess(o)),o}catch(a){return s(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+$(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},N=new Gn;function y(t,e){return N.parse(t,e)}y.options=y.setOptions=function(t){return N.setOptions(t),y.defaults=N.defaults,Ve(y.defaults),y};y.getDefaults=ke;y.defaults=O;function Wn(...t){return N.use(...t),y.defaults=N.defaults,Ve(y.defaults),y}y.use=Wn;y.walkTokens=function(t,e){return N.walkTokens(t,e)};y.parseInline=N.parseInline;y.Parser=z;y.parser=z.parse;y.Renderer=he;y.TextRenderer=Te;y.Lexer=L;y.lexer=L.lex;y.Tokenizer=C;y.Hooks=ee;y.parse=y;y.options;y.setOptions;y.walkTokens;y.parseInline;z.parse;L.lex;const Zn=Object.assign({"../posts/ln.md":Ct,"../posts/spec_decode.md":qt});function Hn(t){const e=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!e)return[{},t];const n={};for(const r of e[1].split(/\r?\n/)){const i=r.indexOf(":");i>0&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}return[n,t.slice(e[0].length)]}const ue=Object.entries(Zn).map(([t,e])=>{const[n,r]=Hn(e),i=t.split("/").pop().replace(/\.md$/,"");return{slug:i,body:r,title:n.title||i,date:n.date||"",summary:n.summary||""}}).sort((t,e)=>e.date.localeCompare(t.date)),Un=t=>y.parse(t.body),Xn=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");function Kn({bodyRef:t,slug:e}){const[n,r]=T.useState([]),[i,s]=T.useState(0);return T.useEffect(()=>{const a=t.current;if(!a)return;const o=Array.from(a.querySelectorAll("h2, h3")),c=new Set,u=o.map((h,g)=>{const l=Xn(h.innerText)||`section-${g}`;let f=l,m=2;for(;c.has(f);)f=`${l}-${m++}`;return c.add(f),h.id=f,f});r(o.map((h,g)=>({id:u[g],text:h.innerText,level:h.tagName})));const d=()=>{let h=0;o.forEach((g,l)=>{g.getBoundingClientRect().top<=120&&(h=l)}),window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4&&(h=o.length-1),s(h)};return d(),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[t,e]),n.length<2?null:p.jsx("nav",{className:"post-toc","aria-label":"Sections",children:n.map((a,o)=>p.jsx("button",{className:`toc-bar${o===i?" active":""}${a.level==="H3"?" sub":""}`,onClick:()=>{var c;return(c=document.getElementById(a.id))==null?void 0:c.scrollIntoView({behavior:"smooth",block:"start"})},title:a.text,"aria-label":a.text,"aria-current":o===i?"true":void 0},a.id))})}const Ze=[{key:"like",char:"👍"},{key:"love",char:"❤️"},{key:"fire",char:"🔥"},{key:"think",char:"🤔"}],He="https://abacus.jasoncameron.dev",Ue="harvestingmoon.github.io";function Qn({slug:t}){const[e,n]=T.useState({}),[r,i]=T.useState({});T.useEffect(()=>{try{i(JSON.parse(localStorage.getItem(`react:${t}`))||{})}catch{i({})}let a=!0;const o=c=>{try{return JSON.parse(c).value}catch{return}};return Ze.forEach(({key:c})=>{fetch(`${He}/get/${Ue}/react-${t}-${c}`).then(u=>u.text()).then(u=>{const d=o(u);a&&typeof d=="number"&&n(h=>({...h,[c]:d}))}).catch(()=>{})}),()=>{a=!1}},[t]);const s=async a=>{if(r[a])return;const o={...r,[a]:!0};i(o);try{localStorage.setItem(`react:${t}`,JSON.stringify(o))}catch{}n(c=>({...c,[a]:(c[a]||0)+1}));try{const c=await fetch(`${He}/hit/${Ue}/react-${t}-${a}`),u=JSON.parse(await c.text()).value;typeof u=="number"&&n(d=>({...d,[a]:u}))}catch{}};return p.jsx("div",{className:"post-reactions",children:Ze.map(({key:a,char:o})=>p.jsxs("button",{className:"reaction","aria-pressed":!!r[a],"aria-label":`React with ${o}`,disabled:!!r[a],onClick:()=>s(a),children:[o,(e[a]||0)>0&&p.jsx("span",{children:e[a]})]},a))})}function Vn({path:t}){const e=t.replace(/^#\/blog\/?/,""),n=e?ue.find(s=>s.slug===e):null,r=T.useRef(null);T.useEffect(()=>{if(!r.current)return;let s=!1;return Mt(async()=>{const{default:a}=await import("./auto-render-C0vWE8Zb.js");return{default:a}},[]).then(({default:a})=>{s||!r.current||a(r.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1})}),()=>{s=!0}},[n]);const i=s=>{var u,d;const a=(d=(u=s.target).closest)==null?void 0:d.call(u,'a[href^="#"]');if(!a)return;const o=a.getAttribute("href");if(o.startsWith("#/"))return;const c=document.getElementById(o.slice(1));c&&(s.preventDefault(),c.scrollIntoView({behavior:"smooth",block:"start"}))};return e&&!n?p.jsxs("section",{style:{marginTop:32},children:[p.jsxs("p",{style:{marginBottom:12},children:["No post called “",e,"”."]}),p.jsx("p",{style:{fontSize:13},children:p.jsx("a",{href:"#/blog",children:"← all writing"})})]}):n?p.jsxs("article",{style:{marginTop:32},children:[p.jsx("h1",{style:{fontSize:22,fontWeight:700,margin:"0 0 4px"},children:n.title}),p.jsx("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:24},children:n.date}),p.jsx("div",{className:"post-body",ref:r,onClick:i,dangerouslySetInnerHTML:{__html:Un(n)}}),p.jsx(Qn,{slug:n.slug}),p.jsx(Kn,{bodyRef:r,slug:n.slug})]}):p.jsxs("section",{style:{marginTop:32},children:[p.jsx("h1",{style:{fontSize:22,fontWeight:700,marginBottom:24},children:"writing"}),ue.length===0&&p.jsx("p",{children:"Nothing here yet."}),ue.map(s=>p.jsxs("div",{className:"post-item",children:[p.jsx("p",{style:{marginBottom:2},children:p.jsx("a",{href:`#/blog/${s.slug}`,style:{fontWeight:600},children:s.title})}),p.jsx("p",{style:{fontSize:13,color:"var(--muted)",marginBottom:2},children:s.date}),s.summary&&p.jsx("p",{style:{fontSize:14,color:"var(--muted)"},children:s.summary})]},s.slug))]})}const Jn=()=>localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");function Yn(){const[t,e]=T.useState(Jn);T.useEffect(()=>{document.documentElement.dataset.theme=t,localStorage.setItem("theme",t)},[t]);const n=t==="dark";return p.jsx("button",{className:"theme-toggle",onClick:()=>e(n?"light":"dark"),"aria-label":n?"Switch to light mode":"Switch to dark mode",title:n?"Light mode":"Dark mode",children:n?"☀":"☾"})}function Xe({path:t}){const e=t.startsWith("#/blog/")?{label:"← writing",href:"#/blog"}:t.startsWith("#/blog")?{label:"← home",href:"#/"}:null;return p.jsxs("div",{className:"top-bar",children:[e&&p.jsx("a",{href:e.href,children:e.label}),p.jsx(Yn,{})]})}function er(){const[t,e]=T.useState(window.location.hash);return T.useEffect(()=>{const n=()=>e(window.location.hash);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),t.startsWith("#/blog")?p.jsxs(p.Fragment,{children:[p.jsx(Xe,{path:t}),p.jsx(Vn,{path:t})]}):p.jsxs(p.Fragment,{children:[p.jsx(Xe,{path:t}),p.jsx(Lt,{}),p.jsx(zt,{}),p.jsx(It,{}),p.jsx(Dt,{}),p.jsx(Pt,{}),p.jsx(jt,{})]})}_t.createRoot(document.getElementById("root")).render(p.jsx(wt.StrictMode,{children:p.jsx(er,{})}));
