const AdSpace = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`w-full bg-muted rounded-lg border border-border flex items-center justify-center text-muted-foreground text-sm ${position === "top" ? "h-24 mb-8" : "h-32 mt-8"}`}>
      <div className="text-center">
        <p className="font-medium">Advertisement Space</p>
        <p className="text-xs mt-1">{position === "top" ? "728x90" : "728x90 or 970x90"}</p>
      </div>
    </div>
  );
};

export default AdSpace;
