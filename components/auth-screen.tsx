'use client';

import Link from 'next/link';
import { useRef, useState, type FormEvent, type InputHTMLAttributes } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, BookOpen, CalendarDays, Check, CheckCheck, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sprout, Star, Trophy, UserRound, UsersRound, X, type LucideIcon } from 'lucide-react';

type Mode = 'login' | 'cadastro';

function Brand({ centered = false }: { centered?: boolean }) {
  return <div className={`brand ${centered ? 'brand-centered' : ''}`}><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 48 54"><path fill="currentColor" d="M6 0h36q6 0 6 6v35L24 54 0 41V6q0-6 6-6Z"/><path fill="none" stroke="white" strokeWidth="3.5" d="m8 14 16 13 16-13M8 25l16 13 16-13"/></svg></span><div><span className="brand-name">EstudaAi</span><p>Disciplina hoje.{centered ? ' ' : <br />}Conquistas amanhã.</p></div></div>;
}

function Landscape({ mode }: { mode: Mode }) {
  const register = mode === 'cadastro';
  const features: { icon: LucideIcon; title: string; description: string }[] = register ? [
    { icon: CalendarDays, title: 'Planejamento completo', description: 'Organize sua rotina e mantenha o foco.' },
    { icon: UsersRound, title: 'Estude em grupo', description: 'Compartilhe, motive e evolua junto.' },
    { icon: BarChart3, title: 'Acompanhe seu progresso', description: 'Veja sua evolução em tempo real.' },
    { icon: Trophy, title: 'Conquiste seus objetivos', description: 'Do concurso à aprovação.' },
  ] : [
    { icon: CalendarDays, title: 'Planeje seus estudos', description: 'Tenha tudo no seu calendário.' },
    { icon: BarChart3, title: 'Acompanhe seu progresso', description: 'Veja sua evolução em tempo real.' },
    { icon: UsersRound, title: 'Estude em grupo', description: 'Compartilhe, motive e evolua junto.' },
    { icon: Trophy, title: 'Conquiste seus objetivos', description: 'Disciplina hoje, resultados amanhã.' },
  ];
  return <aside className={`landscape ${register ? 'landscape-register' : ''}`} aria-label="Conheça o EstudaAi">
    <Brand />
    <p className="handwriting top-quote">{register ? <>“ Disciplina<br />transforma planos<br />em resultados.”</> : <>“ O esforço de hoje<br />é a liberdade de amanhã.”</>}<span /></p>
    <div className="landscape-content">
      <h1>{register ? <>Faça parte de uma<br />comunidade <em>que evolui.</em></> : <>Grandes<br />conquistas<br />começam com<br /><em>pequenos hábitos.</em></>}</h1>
      <p className="intro">{register ? 'Crie sua conta e tenha acesso a todas as ferramentas para organizar seus estudos, alcançar seus objetivos e ir mais longe.' : 'Organize sua rotina, estude com foco, acompanhe seu progresso e evolua todos os dias.'}</p>
      <ul className="features">{features.map(({ icon: Icon, title, description }) => <li key={title}><span className="feature-icon"><Icon strokeWidth={1.9} /></span><div><strong>{title}</strong><p>{description}</p></div></li>)}</ul>
    </div>
    {!register && <p className="handwriting bottom-quote">“ Disciplina<br />transforma planos<br />em resultados.”<span /></p>}
    <div className="stats" aria-label="Números ilustrativos da referência visual">
      <div>{register && <UsersRound />}<span><strong>+10.000</strong><small>estudantes</small></span></div>
      <div>{register && <BookOpen />}<span><strong>{register ? '+1.200' : '+500'}</strong><small>{register ? 'planos criados' : 'grupos ativos'}</small></span></div>
      <div>{register && <Star />}<span><strong>{register ? '98%' : '+90%'}</strong><small>{register ? 'recomendam' : 'relatam mais foco'}</small></span></div>
    </div>
    {register && <p className="handwriting register-bottom">“ Um pequeno passo hoje, uma grande conquista amanhã.”<span /></p>}
  </aside>;
}

function Field({ label, icon: Icon, trailing, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; icon: LucideIcon; trailing?: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const password = props.type === 'password';
  return <div className="field"><div className="field-heading"><label htmlFor={props.id}>{label}</label>{trailing}</div><div className="input-wrap"><Icon size={21} aria-hidden="true" /><input {...props} type={password && visible ? 'text' : props.type} />{password && <button type="button" className="eye-button" aria-label={`${visible ? 'Ocultar' : 'Mostrar'} ${label.toLowerCase()}`} aria-pressed={visible} onClick={() => setVisible(!visible)}>{visible ? <Eye size={21} /> : <EyeOff size={21} />}</button>}</div></div>;
}

function SocialButtons({ onClick, register }: { onClick: (provider: string) => void; register: boolean }) {
  return <><div className="divider"><span>{register ? 'ou cadastre-se com' : 'ou continue com'}</span></div><div className="social-buttons">
    <button type="button" onClick={() => onClick('Google')}><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.52h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.52c-.9.6-2.04.97-3.38.97-2.6 0-4.8-1.76-5.59-4.12H3.07v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.41 13.93a6 6 0 0 1 0-3.86v-2.6H3.07a10 10 0 0 0 0 9.06l3.34-2.6Z"/><path fill="#EA4335" d="M12 5.95c1.47 0 2.79.51 3.83 1.51L18.7 4.6A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.93 5.47l3.34 2.6C7.2 7.71 9.4 5.95 12 5.95Z"/></svg>Google</button>
    <button type="button" onClick={() => onClick('Discord')}><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#5865F2" d="M19.73 4.73a18 18 0 0 0-4.46-1.38l-.56 1.14a16.8 16.8 0 0 0-5.42 0l-.57-1.14a18 18 0 0 0-4.45 1.38C1.45 8.92.7 13 .98 17.02a18 18 0 0 0 5.47 2.75l1.18-1.94a11 11 0 0 1-1.86-.9l.46-.36c3.59 1.66 7.95 1.66 11.5 0l.48.36c-.6.35-1.22.65-1.88.9l1.19 1.94a18 18 0 0 0 5.48-2.75c.34-4.66-.79-8.7-3.27-12.29ZM8.52 14.55c-1.08 0-1.97-1-1.97-2.23s.87-2.23 1.97-2.23 1.99 1.01 1.97 2.23c0 1.23-.87 2.23-1.97 2.23Zm6.96 0c-1.08 0-1.97-1-1.97-2.23s.87-2.23 1.97-2.23 1.99 1.01 1.97 2.23c0 1.23-.87 2.23-1.97 2.23Z"/></svg>Discord</button>
    <button type="button" onClick={() => onClick('GitHub')}><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.8-1.33-3.8-1.33-.5-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.31 3.08 1.15A10.7 10.7 0 0 1 12 6.11c.95 0 1.9.13 2.8.38 2.14-1.46 3.07-1.15 3.07-1.15.61 1.55.23 2.7.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.35-2.64 5.3-5.15 5.58.4.35.77 1.04.77 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>GitHub</button>
  </div></>;
}

export default function AuthScreen({ mode }: { mode: Mode }) {
  const register = mode === 'cadastro';
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState({ title: '', body: '' });
  const dialog = useRef<HTMLDialogElement>(null);
  const form = useRef<HTMLFormElement>(null);
  function showNotice(title: string, body: string) { setNotice({ title, body }); dialog.current?.showModal(); }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('');
    if (!register) { showNotice('Login em preparação', 'A tela está pronta. A conexão segura com sua conta será habilitada na etapa de autenticação. Nenhuma senha foi enviada ou armazenada.'); return; }
    const data = new FormData(event.currentTarget);
    if (step === 1) {
      if (String(data.get('name')).trim().split(/\s+/).length < 2) { setError('Informe seu nome completo.'); return; }
      if (String(data.get('email')).trim().toLowerCase() !== String(data.get('confirmEmail')).trim().toLowerCase()) { setError('Os e-mails precisam ser iguais.'); return; }
      const password = String(data.get('password'));
      if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/.test(password)) { setError('Use pelo menos 8 caracteres, incluindo letras, números e um símbolo.'); return; }
      if (password !== data.get('confirmPassword')) { setError('As senhas precisam ser iguais.'); return; }
      setStep(2);
    } else { form.current?.reset(); setStep(3); }
  }
  return <main className={`auth-page register-page ${register ? '' : 'login-page'}`}>
    <Landscape mode="cadastro" />
    <section className="auth-side" aria-label={register ? 'Cadastro' : 'Login'}>
      <nav className="account-nav" aria-label="Acesso à conta"><span>{register ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}</span><Link href={register ? '/login' : '/cadastro'}>{register ? 'Entrar' : 'Criar conta'}</Link></nav>
      <div className="auth-card">
        {!register && <Brand centered />}
        <header className="form-title"><h2>{register ? 'Crie sua conta' : 'Bem-vindo de volta!'}</h2><p>{register ? 'Comece hoje sua jornada com o EstudaAi.' : 'Faça login para continuar sua jornada.'}</p></header>
        {register && <ol className="steps" aria-label="Etapas do cadastro">{['Seus dados', 'Perfil', 'Pronto'].map((label, index) => <li key={label} className={step >= index + 1 ? 'active' : ''} aria-current={step === index + 1 ? 'step' : undefined}><span>{step > index + 1 ? <Check size={18} /> : index + 1}</span><small>{label}</small></li>)}</ol>}
        {step !== 3 && <form ref={form} onSubmit={submit}>
          <div hidden={register && step !== 1}>
            {register && <Field label="Nome completo" icon={UserRound} id="name" name="name" autoComplete="name" placeholder="Seu nome completo" required={step === 1} />}
            <div className={register ? 'field-row' : ''}><Field label="E-mail" icon={Mail} id="email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" required={step === 1} />{register && <Field label="Confirme seu e-mail" icon={Mail} id="confirm-email" name="confirmEmail" type="email" autoComplete="off" placeholder="confirme seu e-mail" required={step === 1} />}</div>
            <div className={register ? 'field-row' : ''}><Field label="Senha" icon={LockKeyhole} id="password" name="password" type="password" autoComplete={register ? 'new-password' : 'current-password'} placeholder={register ? 'Crie uma senha' : 'Sua senha'} required={step === 1} trailing={!register && <button className="text-button" type="button" onClick={() => showNotice('Recuperar senha', 'A recuperação por e-mail será disponibilizada quando a autenticação estiver conectada. Ainda não há envio de mensagens nesta versão.')}>Esqueceu a senha?</button>} />{register && <Field label="Confirme sua senha" icon={LockKeyhole} id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" placeholder="Confirme sua senha" required={step === 1} />}</div>
            {register ? <p className="password-hint"><LockKeyhole size={21} />Sua senha deve ter pelo menos 8 caracteres, incluindo letras, números e um símbolo.</p> : <label className="remember"><input name="remember" type="checkbox" defaultChecked /><span>Lembrar por 30 dias</span></label>}
          </div>
          {register && step === 2 && <fieldset className="profile-fields"><legend>Como você quer estudar?</legend><label htmlFor="goal">Seu principal objetivo</label><select id="goal" name="goal" defaultValue="" required><option value="" disabled>Selecione seu objetivo</option><option>Concurso público</option><option>Faculdade</option><option>ENEM ou vestibular</option><option>Desenvolvimento pessoal</option></select><label htmlFor="study-mode">Prefere estudar</label><select id="study-mode" name="studyMode" defaultValue="individual"><option value="individual">Individualmente</option><option value="duo">Em dupla</option><option value="group">Em grupo</option></select><button className="back-button" type="button" onClick={() => { setStep(1); setError(''); }}><ArrowLeft size={18} />Voltar aos meus dados</button></fieldset>}
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-button" type="submit">{register ? step === 1 ? 'Continuar' : 'Concluir prévia' : 'Entrar'}<ArrowRight size={21} /></button>
        </form>}
        {register && step === 3 && <div className="completion" role="status"><CheckCheck size={46} /><h3>Prévia concluída!</h3><p>Você conheceu o fluxo de cadastro. Sua conta ainda não foi criada: o próximo passo é conectar a autenticação.</p><Link className="primary-button" href="/login">Voltar ao login<ArrowRight size={20} /></Link></div>}
        {step === 1 && <><SocialButtons register={register} onClick={provider => showNotice(`Entrar com ${provider}`, `O acesso com ${provider} será habilitado após configurar o provedor de autenticação.`)} />{register && <p className="terms">Ao se cadastrar, você concorda com nossos <button type="button" onClick={() => showNotice('Termos de Uso', 'Os Termos de Uso serão disponibilizados antes da abertura do cadastro ao público.')}>Termos de Uso</button> e <button type="button" onClick={() => showNotice('Política de Privacidade', 'A Política de Privacidade será disponibilizada antes da abertura do cadastro ao público.')}>Política de Privacidade</button>.</p>}</>}
        <div className="security-note">{register ? <Sprout aria-hidden="true" /> : <ShieldCheck aria-hidden="true" />}<div><strong>{register ? 'Mais que uma plataforma, uma comunidade.' : 'Seus dados estão seguros conosco.'}</strong><p>{register ? 'Organize, compartilhe, evolua. O seu futuro começa agora.' : 'Utilizamos criptografia para garantir sua privacidade.'}</p></div></div>
      </div>
      {!register && <footer className="login-footer"><p>“ A consistência é o que transforma sonhos em realidade. ”</p><span>EstudaAi</span></footer>}
    </section>
    <dialog ref={dialog} className="notice-dialog" aria-labelledby="notice-title" aria-describedby="notice-body" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="Fechar"><X /></button><h2 id="notice-title">{notice.title}</h2><p id="notice-body">{notice.body}</p><button type="button" className="primary-button" onClick={() => dialog.current?.close()}>Entendi</button></dialog>
  </main>;
}
