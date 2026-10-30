Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath([System.Drawing.RectangleF]$Rect, [float]$Radius) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = $Radius * 2
  $path.AddArc($Rect.X, $Rect.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rect.X, $Rect.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

$outputDir = Join-Path $PSScriptRoot '..\public\share'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
$cards = @(
  @{ Name = 'zh'; Headline = '离线加密的账号账本'; Subtitle = '没有服务器 · 不用注册 · 数据由你掌控' },
  @{ Name = 'zh-hant'; Headline = '離線加密的帳號帳本'; Subtitle = '沒有伺服器 · 不用註冊 · 資料由你掌控' },
  @{ Name = 'en'; Headline = 'Your encrypted account ledger'; Subtitle = 'No server · No sign-up · Your data stays yours' }
)

foreach ($card in $cards) {
  $bitmap = [System.Drawing.Bitmap]::new(1200, 630)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(0, 0, 1200, 630),
    [System.Drawing.Color]::FromArgb(7, 20, 38),
    [System.Drawing.Color]::FromArgb(24, 77, 146),
    25
  )
  $graphics.FillRectangle($background, 0, 0, 1200, 630)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(28, 56, 189, 248)), 820, -200, 520, 520)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(30, 99, 102, 241)), -160, 420, 500, 500)

  $iconBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(88, 82, 142, 142),
    [System.Drawing.Color]::FromArgb(56, 189, 248),
    [System.Drawing.Color]::FromArgb(79, 70, 229),
    45
  )
  $iconPath = New-RoundedRectPath ([System.Drawing.RectangleF]::new(88, 82, 142, 142)) 34
  $graphics.FillPath($iconBrush, $iconPath)
  $vFont = [System.Drawing.Font]::new('Segoe UI', 76, [System.Drawing.FontStyle]::Bold)
  $graphics.DrawString('V', $vFont, [System.Drawing.Brushes]::White, 119, 88)

  $brandFont = [System.Drawing.Font]::new('Segoe UI', 58, [System.Drawing.FontStyle]::Bold)
  $headlineFont = [System.Drawing.Font]::new('Microsoft YaHei UI', 48, [System.Drawing.FontStyle]::Bold)
  $subtitleFont = [System.Drawing.Font]::new('Microsoft YaHei UI', 25, [System.Drawing.FontStyle]::Regular)
  $urlFont = [System.Drawing.Font]::new('Segoe UI', 22, [System.Drawing.FontStyle]::Regular)
  $graphics.DrawString('Vaultyn', $brandFont, [System.Drawing.Brushes]::White, 270, 104)
  $graphics.DrawString($card.Headline, $headlineFont, [System.Drawing.Brushes]::White, 88, 300)
  $graphics.DrawString($card.Subtitle, $subtitleFont, [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(199, 220, 255)), 88, 405)
  $urlPath = New-RoundedRectPath ([System.Drawing.RectangleF]::new(88, 500, 250, 58)) 28
  $graphics.FillPath([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(30, 255, 255, 255)), $urlPath)
  $graphics.DrawString('vaultyn.com', $urlFont, [System.Drawing.Brushes]::White, 124, 511)

  $path = Join-Path $outputDir ($card.Name + '.png')
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bitmap.Dispose(); $background.Dispose(); $iconBrush.Dispose(); $iconPath.Dispose(); $urlPath.Dispose()
  $vFont.Dispose(); $brandFont.Dispose(); $headlineFont.Dispose(); $subtitleFont.Dispose(); $urlFont.Dispose()
}

Write-Output 'Generated 3 social share cards in public/share/.'
