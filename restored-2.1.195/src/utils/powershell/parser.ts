// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bde
// matched 2.1.88 source: src/utils/powershell/parser.ts
// class=modified  jaccard=0.3256  score=0.7955  fileCov=0.3553
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bde] deps: je, SG, OB, kDe, Jt
((l0p = ((o0p - s0p) * 3) / 8),
  (c0p = l0p - EPa.length - i0p),
  (Rn_ = Math.max(0, Math.floor((c0p * 3) / 4) - a0p)),
  (wmo = u0p),
  (d0p = {
    valid: false,
    statements: [],
    variables: [],
    hasStopParsing: false,
  }));
((b0p = new Set(["PwshSpawnError", "PwshError", "PwshTimeout", "EmptyOutput", "InvalidJson"])),
  (iEe = JC(
    (e) => {
      let t = _0p(e);
      return (
        t.then((n) => {
          if (!n.valid && b0p.has(n.errors[0]?.errorId ?? "")) iEe.cache.delete(e);
        }),
        t
      );
    },
    (e) => e,
    256,
  )),
  (_de = Object.assign(Object.create(null), {
    ls: "Get-ChildItem",
    dir: "Get-ChildItem",
    gci: "Get-ChildItem",
    cat: "Get-Content",
    type: "Get-Content",
    gc: "Get-Content",
    cd: "Set-Location",
    sl: "Set-Location",
    chdir: "Set-Location",
    pushd: "Push-Location",
    popd: "Pop-Location",
    pwd: "Get-Location",
    gl: "Get-Location",
    gi: "Get-Item",
    gp: "Get-ItemProperty",
    ni: "New-Item",
    mkdir: "New-Item",
    md: "New-Item",
    ri: "Remove-Item",
    del: "Remove-Item",
    rd: "Remove-Item",
    rmdir: "Remove-Item",
    rm: "Remove-Item",
    erase: "Remove-Item",
    mi: "Move-Item",
    mv: "Move-Item",
    move: "Move-Item",
    ci: "Copy-Item",
    cp: "Copy-Item",
    copy: "Copy-Item",
    cpi: "Copy-Item",
    si: "Set-Item",
    rni: "Rename-Item",
    ren: "Rename-Item",
    ps: "Get-Process",
    gps: "Get-Process",
    kill: "Stop-Process",
    spps: "Stop-Process",
    start: "Start-Process",
    saps: "Start-Process",
    sajb: "Start-Job",
    ipmo: "Import-Module",
    echo: "Write-Output",
    write: "Write-Output",
    sleep: "Start-Sleep",
    help: "Get-Help",
    man: "Get-Help",
    gcm: "Get-Command",
    gsv: "Get-Service",
    gv: "Get-Variable",
    sv: "Set-Variable",
    h: "Get-History",
    history: "Get-History",
    iex: "Invoke-Expression",
    iwr: "Invoke-WebRequest",
    irm: "Invoke-RestMethod",
    icm: "Invoke-Command",
    ii: "Invoke-Item",
    nsn: "New-PSSession",
    etsn: "Enter-PSSession",
    exsn: "Exit-PSSession",
    gsn: "Get-PSSession",
    rsn: "Remove-PSSession",
    cls: "Clear-Host",
    clear: "Clear-Host",
    select: "Select-Object",
    where: "Where-Object",
    foreach: "ForEach-Object",
    "%": "ForEach-Object",
    "?": "Where-Object",
    measure: "Measure-Object",
    ft: "Format-Table",
    fl: "Format-List",
    fw: "Format-Wide",
    oh: "Out-Host",
    ogv: "Out-GridView",
    ac: "Add-Content",
    clc: "Clear-Content",
    tee: "Tee-Object",
    epcsv: "Export-Csv",
    sp: "Set-ItemProperty",
    rp: "Remove-ItemProperty",
    cli: "Clear-Item",
    epal: "Export-Alias",
    sls: "Select-String",
  })));
F4 = new Set(["-", "\u2013", "\u2014", "\u2015"]);
class Rmo {
  capacity;
  buffer;
  head = 0;
  size = 0;
  constructor(e) {
    this.capacity = e;
    this.buffer = Array(e);
  }
  add(e) {
    if (
      ((this.buffer[this.head] = e),
      (this.head = (this.head + 1) % this.capacity),
      this.size < this.capacity)
    )
      this.size++;
  }
  addAll(e) {
    for (let t of e) this.add(t);
  }
  getRecent(e) {
    let t = [],
      n = this.size < this.capacity ? 0 : this.head,
      r = Math.min(e, this.size);
    for (let o = 0; o < r; o++) {
      let s = (n + this.size - r + o) % this.capacity;
      t.push(this.buffer[s]);
    }
    return t;
  }
  toArray() {
    if (this.size === 0) return [];
    let e = [],
      t = this.size < this.capacity ? 0 : this.head;
    for (let n = 0; n < this.size; n++) {
      let r = (t + n) % this.capacity;
      e.push(this.buffer[r]);
    }
    return e;
  }
  clear() {
    ((this.buffer.length = 0), (this.head = 0), (this.size = 0));
  }
  length() {
    return this.size;
  }
}
function Npt() {
  return Fue("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, Dmo, Lmo).effective;
}
var Lmo = 150000,
  Dmo = 30000;
