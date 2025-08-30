export default function ProgressBar({ step, total }) {
  const width = (step / total) * 100;
  return (
    <div className="progress-bar">
      <div style={{ width: `${width}%` }}></div>
    </div>
  );
}
