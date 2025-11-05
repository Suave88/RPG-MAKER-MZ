//=============================================================================
// MOG_BattleHud.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc (v1.3) Customização avançada do layout de batalha
 * @author Moghunter
 * @url https://mogplugins.com
 *
 * @param
 * @param -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Hud X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default -212
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 831
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Space X
 * @text Space X
 * @desc Define o espaço na horizontal entre as huds.
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Space Y
 * @text Space Y
 * @desc Define o espaço na vertical entre as huds.
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Slide X
 * @text Slide Animation X
 * @desc Deslizar X-Axis.
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Slide Y
 * @text Slide Animation Y
 * @desc Deslizar Y-Axis.
 * @default 433
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Vertical Mode
 * @desc Deixar a Hud na posição vertical.
 * @default false
 * @type boolean
 * @on Vertical Mode
 * @off Horizontal Mode
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Max Battle Members
 * @desc Quantidade de maxima de battler na batalha.
 * @type number
 * @min 1
 * @default 4
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Layout2 Visible
 * @text Visible
 * @desc Ativar o segunda imagem do layout, esta imagem
 * ficará acima das faces e medidores.
 * @default true
 * @type boolean
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout2 X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default 0
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout2 Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 0
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Turn Visible
 * @text Visible
 * @desc Apresentar a imagem do turno.
 * @default true
 * @type boolean
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis do turno.
 * @default -12
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis do turno.
 * @default -277
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Rotation Speed
 * @text Rotation Animation Speed
 * @desc Definição da velocidade de rotação da imagem.
 * @default 0
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Zoom Animation
 * @text Zoom Animation
 * @desc Ativar a animação de zoom ao ativar.
 * @default true
 * @type boolean
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Face Visible
 * @text Visible
 * @desc Apresentar a imagem da face.
 * @default true
 * @type boolean
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis da face.
 * @default 165
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis da face.
 * @default 69
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Shake Animation
 * @text Shake Animation
 * @desc Ativar animação de tremer da face.
 * @default true
 * @type boolean
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Zoom Animation
 * @text Zoom Animation
 * @desc Ativar animação de zoom de ação.
 * @default true
 * @type boolean
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Frame Animation
 * @text Animated (Frames)
 * @desc Ativar animação por frames.
 *   É necessário dividir a imagem por 5.
 * @default true
 * @type boolean
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Priority
 * @text Priority
 * @desc Prioridade da Face. (0 Low - 1 High)
 * @type select
 * @option Low (Below of Gauge)
 * @value 0
 * @option High (Above of Gauge)
 * @value 1
 * @default 0
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Name Visible
 * @text Visible
 * @desc Apresentar o nome do personagem.
 * @default true
 * @type boolean
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis do nome.
 * @default -106
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis do nome.
 * @default 113
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Align
 * @text Text Alignment
 * @desc Alinhamento do nome.
 * 0 - Left 1 - Center 2 - Right
 * @type select
 * @option Left
 * @value 0
 * @option Center
 * @value 1
 * @option Right
 * @value 2
 * @default 1
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Font Size
 * @text Font Size
 * @desc Definição do tamanho da fonte do nome.
 * @default 20
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Bold Size
 * @text Bold Size
 * @desc Definição do tamanho do contorno.
 * @default 4
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Font Italic
 * @text Font Italic
 * @desc Ativar fonte em itálico.
 * @default false
 * @type boolean
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> HP <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param HP Meter Visible
 * @text Gauge Visible
 * @desc Apresentar o medidor de HP
 * @default true
 * @type boolean
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter X-Axis
 * @text Gauge X-Axis
 * @desc Definição da posição X-Axis do medidor de HP.
 * @default 205
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Y-Axis
 * @text Gauge Y-Axis
 * @desc Definição da posição Y-Axis do medidor de HP.
 * @default 12
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Angle
 * @text Gauge Angle
 * @desc Ángulo do medidor.
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Flow Anime
 * @text Gradient Animation
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 * @type boolean
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Visible
 * @text Number Visible
 * @desc Apresentar o numero de HP
 * @default true
 * @type boolean
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Align type
 * @text Number Alignment
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right / 1 - Center / 2 - Left / 3 - Diagonal)
 * @type select
 * @option Right
 * @value 0
 * @option Center
 * @value 1
 * @option Left
 * @value 2
 * @option Diagonal
 * @value 3
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number X-Axis
 * @text Number X-Axis
 * @desc Definição da posição X-Axis do numero de HP.
 * @default 400
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Y-Axis
 * @text Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP.
 * @default -19
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number Visible
 * @text Max HP Visible
 * @desc Apresentar o numero de HP maximo.
 * @default false
 * @type boolean
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number X-Axis
 * @text Max HP X-Axis
 * @desc Definição da posição X-Axis do numero de HP maximo.
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number Y-Axis
 * @text Max HP Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP maximo.
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> MP <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param MP Meter Visible
 * @text Gauge Visible
 * @desc Apresentar o medidor de MP
 * @default true
 * @type boolean
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter X-Axis
 * @text Gauge X-Axis
 * @desc Definição da posição X-Axis do medidor de MP.
 * @default 245
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Y-Axis
 * @text Gauge Y-Axis
 * @desc Definição da posição Y-Axis do medidor de MP.
 * @default 57
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Angle
 * @text Gauge Angle
 * @desc Ángulo do medidor.
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Flow Anime
 * @text Gradient Animation
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 * @type boolean
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Visible
 * @text Number Visible
 * @desc Apresentar o numero de MP
 * @default true
 * @type boolean
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Align type
 * @text Number Alignment
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right / 1 - Center / 2 - Left / 3 - Diagonal)
 * @type select
 * @option Right
 * @value 0
 * @option Center
 * @value 1
 * @option Left
 * @value 2
 * @option Diagonal
 * @value 3
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number X-Axis
 * @text Number X-Axis
 * @desc Definição da posição X-Axis do numero de MP.
 * @default 440
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Y-Axis
 * @text Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP.
 * @default 45
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number Visible
 * @text Max MP Visible
 * @desc Apresentar o numero de MP maximo.
 * @default false
 * @type boolean
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number X-Axis
 * @text Max HP X-Axis
 * @desc Definição da posição X-Axis do numero de MP maximo.
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number Y-Axis
 * @text Max HP Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP maximo.
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> TP <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param TP Meter Visible
 * @text Gauge Visible
 * @desc Apresentar o medidor de TP
 * @default true
 * @type boolean
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter X-Axis
 * @text Gauge X-Axis
 * @desc Definição da posição X-Axis do medidor de TP.
 * @default 245
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Y-Axis
 * @text Gauge Y-Axis
 * @desc Definição da posição Y-Axis do medidor de TP.
 * @default 102
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Angle
 * @text Gauge Angle
 * @desc Ángulo do medidor.
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Flow Anime
 * @text Gradient Animation
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 * @type boolean
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Visible
 * @text Number Visible
 * @desc Apresentar o numero de TP.
 * @default true
 * @type boolean
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Align type
 * @text Number Alignment
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right / 1 - Center / 2 - Left / 3 - Diagonal)
 * @type select
 * @option Right
 * @value 0
 * @option Center
 * @value 1
 * @option Left
 * @value 2
 * @option Diagonal
 * @value 3
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number X-Axis
 * @text Number X-Axis
 * @desc Definição da posição X-Axis do numero de TP.
 * @default 440
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Y-Axis
 * @text Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP.
 * @default 74
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number Visible
 * @text Max TP Visible
 * @desc Apresentar o numero de TP maximo.
 * @default false
 * @type boolean
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number X-Axis
 * @text Max TP X-Axis
 * @desc Definição da posição X-Axis do numero de TP maximo.
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number Y-Axis
 * @text Max TP Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP maximo.
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param ATB Meter Visible
 * @text Gauge Visible
 * @desc Apresentar o medidor de TP
 * @default true
 * @type boolean
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter X-Axis
 * @text Gauge X-Axis
 * @desc Definição da posição X-Axis do medidor de ATB.
 * @default 162
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Y-Axis
 * @text Gauge Y-Axis
 * @desc Definição da posição Y-Axis do medidor de ATB.
 * @default 203
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Angle
 * @text Gauge Angle
 * @desc Ángulo do medidor.
 * @default 0
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Flow Anime
 * @text Gradient Animation
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 * @type boolean
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param States Visible
 * @text Visible
 * @desc Apresentar o numero as condições.
 * @default true
 * @type boolean
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States X-Axis
 * @text X-Axis
 * @desc Definição da posição X-Axis das condições.
 * @default 240
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Y-Axis
 * @text Y-Axis
 * @desc Definição da posição Y-Axis das condições.
 * @default 132
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Mode
 * @text View Mode
 * @desc Definição do modo apresentado das condições.
 * 0 - Timing Mode 1 - Line Mode
 * @type select
 * @option Timing Mode (Show one state for second)
 * @value 0
 * @option Line Mode (Show all states)
 * @value 1
 * @default 0
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Max
 * @text Max number of states
 * @desc Quantidade maxima de ícones apresentados.
 * @type number
 * @min 1
 * @default 4
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Align
 * @text Alignment
 * @desc Alinhamento dos ícones.
 * 0 - Left 1 - Right 2 - Upper 3 - Below
 * @type select
 * @option Left
 * @value 0
 * @option Right
 * @value 1
 * @option Upper
 * @value 2
 * @option Below
 * @value 3
 * @default 0
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Command <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Command Auto Adjust
 * @text Position Mode
 * @desc Ativar ajuste automático baseado na posição
 * da Hud.
 * @type select
 * @option Auto
 * @value 0
 * @option Static
 * @value 1
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis do comando.
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do comando.
 * @default -208
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Slide X
 * @text Slide Animation X
 * @desc Animação de slide X-Axis.
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Slide Y
 * @text Slide Animation Y
 * @desc Animação de slide Y-Axis.
 * @default 111
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Command
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Command X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default -47
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Command Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -43
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Party <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param W Party X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 765
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 294
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 0
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default -173
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Party
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Party X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default -765
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Party Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -73
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Help <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param W Help X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default -87
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Help
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Help X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Help Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Skill <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param W Skill X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill maxCols
 * @text Max Columns
 * @desc Definição da quantidade de colunas da janela.
 * @type number
 * @min 1
 * @default 2
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default 87
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Skill
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Skill X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Skill Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -116
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Item <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * @default
 *
 * @param W Item X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item maxCols
 * @text Max Columns
 * @desc Definição da quantidade de colunas da janela.
 * @type number
 * @min 1
 * @default 2
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default 87
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Item
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Item X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Item Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -116
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Actor <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param W Actor X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 200
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor maxCols
 * @text Max Columns
 * @desc Definição da quantidade de colunas da janela.
 * @type number
 * @min 1
 * @default 1
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default 87
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Actor
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Actor X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Actor Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -116
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> Window Enemy <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param W Enemy X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Width
 * @text Width
 * @desc Definição da largura da janela.
 * @default 200
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Height
 * @text Height
 * @desc Definição da altura da janela.
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy maxCols
 * @text Max Columns
 * @desc Definição da quantidade de colunas da janela.
 * @type number
 * @min 1
 * @default 2
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Slide X
 * @text Slide Animation X
 * @desc Animação de Slide X-Axis.
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Slide Y
 * @text Slide Animation Y
 * @desc Animação de Slide Y-Axis.
 * @default 87
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Enemy
 * @text Layout (Picture)
 * @desc Ativar a imagem de layout.
 * @default true
 * @type boolean
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Enemy X-Axis
 * @text Layout X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Enemy Y-Axis
 * @text Layout Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -116
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Screen Layout
 * @text Visible
 * @desc Ativar o Layout da tela.
 * @default true
 * @type boolean
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen X-Axis
 * @text X-Axis
 * @desc Definição do posição X-axis da imagem.
 * @default 0
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Y-Axis
 * @text Y-Axis
 * @desc Definição do posição Y-axis da imagem.
 * @default 0
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * @param -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Custom Position 1
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 2
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 3
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 4
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 5
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 6
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 7
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 8
 * @desc Definição da posição da hud.
 * Ex - 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help
 * =============================================================================
 * +++ MOG_BattleHud (v1.3) +++
 * By Moghunter
 * https://mogplugins.com
 * =============================================================================
 * O plugin permite customizar o layout de batalha.
 *
 * =============================================================================
 * RESOLUTION SCALING
 * =============================================================================
 * This version has been adjusted for Full HD (1920x1080) resolution.
 * Scaling factors applied:
 * - X-axis: 2.353 (1920/816)
 * - Y-axis: 1.731 (1080/624)
 *
 * =============================================================================
 * REQUIRED FILES
 * =============================================================================
 * Serão necessários os arquivos. (img/battlehud/)
 *
 * -> HP_Meter.png
 * -> HP_Number.png
 * -> MP_Meter.png
 * -> MP_Number.png
 * -> TP_Meter.png
 * -> TP_Number.png
 * -> ATB_Meter.png
 * -> Layout.png
 * -> Layout_Actor.png
 * -> Layout_Command.png
 * -> Layout_Enemy.png
 * -> Layout_Help.png
 * -> Layout_Item.png
 * -> Layout_Party.png
 * -> Layout_Screen.png
 * -> Layout_Skill.png
 * -> Turn.png
 *
 * =============================================================================
 * Para nomear as faces dos battlers basta nomear da seguinte forma.
 *
 * Face_ + ACTOR_ID.png
 *
 * Face_1.png
 * Face_2.png
 * Face_3.png
 * ...
 *
 * =============================================================================
 * NOTETAGS
 * =============================================================================
 * Para ativar o efeito de respirar nas faces utilize a notetag abaixo
 *
 * Face Breath Effect
 *
 * =============================================================================
 * SCRIPT COMMANDS
 * =============================================================================
 * Para ocultar a hud use o comando abaixo.
 *
 * $gameSystem._bhud_visible = false
 *
 * Para apresentar a hud use o commando abaixo.
 *
 * $gameSystem._bhud_visible = true
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.3) - Correção do bug de ativar zoom na face quando a opção é desativada.
 * (v1.2) - Correção do bug de ativar o som de animação no inicio da batalha, no
 *          modo frontal.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
var Imported = Imported || {};
Imported.MOG_BattleHud = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_BattleHud');

// Main Configuration
Moghunter.bhud_pos_x = Number(Moghunter.parameters['Hud X-Axis'] || -212);
Moghunter.bhud_pos_y = Number(Moghunter.parameters['Hud Y-Axis'] || 831);
Moghunter.bhud_space_x = Number(Moghunter.parameters['Hud Space X'] || 0);
Moghunter.bhud_space_y = Number(Moghunter.parameters['Hud Space Y'] || 0);
Moghunter.bhud_slide_x = Number(Moghunter.parameters['Hud Slide X'] || 0);
Moghunter.bhud_slide_y = Number(Moghunter.parameters['Hud Slide Y'] || 433);
Moghunter.bhud_vertical = String(Moghunter.parameters['Vertical Mode'] || 'false');
Moghunter.bhud_max_battle_members = Number(Moghunter.parameters['Max Battle Members'] || 4);

// Layout Overlay
Moghunter.bhud_layout2_visible = String(Moghunter.parameters['Layout2 Visible'] || 'true');
Moghunter.bhud_layout2_x = Number(Moghunter.parameters['Layout2 X-Axis'] || 0);
Moghunter.bhud_layout2_y = Number(Moghunter.parameters['Layout2 Y-Axis'] || 0);

// Turn
Moghunter.bhud_turn_visible = String(Moghunter.parameters['Turn Visible'] || 'true');
Moghunter.bhud_turn_pos_x = Number(Moghunter.parameters['Turn X-Axis'] || -12);
Moghunter.bhud_turn_pos_y = Number(Moghunter.parameters['Turn Y-Axis'] || -277);
Moghunter.bhud_turn_rotation = Number(Moghunter.parameters['Turn Rotation Speed'] || 0);
Moghunter.bhud_turn_zoom = String(Moghunter.parameters['Turn Zoom Animation'] || 'true');

// Face
Moghunter.bhud_face_visible = String(Moghunter.parameters['Face Visible'] || 'true');
Moghunter.bhud_face_pos_x = Number(Moghunter.parameters['Face X-Axis'] || 165);
Moghunter.bhud_face_pos_y = Number(Moghunter.parameters['Face Y-Axis'] || 69);
Moghunter.bhud_face_shake = String(Moghunter.parameters['Face Shake Animation'] || 'true');
Moghunter.bhud_face_zoom = String(Moghunter.parameters['Face Zoom Animation'] || 'true');
Moghunter.bhud_face_animated = String(Moghunter.parameters['Face Frame Animation'] || 'true');
Moghunter.bhud_face_priority = Number(Moghunter.parameters['Face Priority'] || 0);

// Name
Moghunter.bhud_name_visible = String(Moghunter.parameters['Name Visible'] || 'true');
Moghunter.bhud_name_pos_x = Number(Moghunter.parameters['Name X-Axis'] || -106);
Moghunter.bhud_name_pos_y = Number(Moghunter.parameters['Name Y-Axis'] || 113);
Moghunter.bhud_name_align = Number(Moghunter.parameters['Name Align'] || 1);
Moghunter.bhud_name_font_size = Number(Moghunter.parameters['Name Font Size'] || 20);
Moghunter.bhud_name_font_bold = Number(Moghunter.parameters['Name Bold Size'] || 4);
Moghunter.bhud_name_font_italic = String(Moghunter.parameters['Name Font Italic'] || 'false');

// HP
Moghunter.bhud_hp_meter_visible = String(Moghunter.parameters['HP Meter Visible'] || 'true');
Moghunter.bhud_hp_meter_pos_x = Number(Moghunter.parameters['HP Meter X-Axis'] || 205);
Moghunter.bhud_hp_meter_pos_y = Number(Moghunter.parameters['HP Meter Y-Axis'] || 12);
Moghunter.bhud_hp_meter_rotation = Number(Moghunter.parameters['HP Meter Angle'] || 0);
Moghunter.bhud_hp_meter_flow = String(Moghunter.parameters['HP Meter Flow Anime'] || 'true');
Moghunter.bhud_hp_number_visible = String(Moghunter.parameters['HP Number Visible'] || 'true');
Moghunter.bhud_hp_number_align = Number(Moghunter.parameters['HP Number Align type'] || 0);
Moghunter.bhud_hp_number_pos_x = Number(Moghunter.parameters['HP Number X-Axis'] || 400);
Moghunter.bhud_hp_number_pos_y = Number(Moghunter.parameters['HP Number Y-Axis'] || -19);
Moghunter.bhud_maxhp_visible = String(Moghunter.parameters['MaxHP Number Visible'] || 'false');
Moghunter.bhud_maxhp_pos_x = Number(Moghunter.parameters['MaxHP Number X-Axis'] || 0);
Moghunter.bhud_maxhp_pos_y = Number(Moghunter.parameters['MaxHP Number Y-Axis'] || 0);

// MP
Moghunter.bhud_mp_meter_visible = String(Moghunter.parameters['MP Meter Visible'] || 'true');
Moghunter.bhud_mp_meter_pos_x = Number(Moghunter.parameters['MP Meter X-Axis'] || 245);
Moghunter.bhud_mp_meter_pos_y = Number(Moghunter.parameters['MP Meter Y-Axis'] || 57);
Moghunter.bhud_mp_meter_rotation = Number(Moghunter.parameters['MP Meter Angle'] || 0);
Moghunter.bhud_mp_meter_flow = String(Moghunter.parameters['MP Meter Flow Anime'] || 'true');
Moghunter.bhud_mp_number_visible = String(Moghunter.parameters['MP Number Visible'] || 'true');
Moghunter.bhud_mp_number_align = Number(Moghunter.parameters['MP Number Align type'] || 0);
Moghunter.bhud_mp_number_pos_x = Number(Moghunter.parameters['MP Number X-Axis'] || 440);
Moghunter.bhud_mp_number_pos_y = Number(Moghunter.parameters['MP Number Y-Axis'] || 45);
Moghunter.bhud_maxmp_visible = String(Moghunter.parameters['MaxMP Number Visible'] || 'false');
Moghunter.bhud_maxmp_pos_x = Number(Moghunter.parameters['MaxMP Number X-Axis'] || 0);
Moghunter.bhud_maxmp_pos_y = Number(Moghunter.parameters['MaxMP Number Y-Axis'] || 0);

// TP
Moghunter.bhud_tp_meter_visible = String(Moghunter.parameters['TP Meter Visible'] || 'true');
Moghunter.bhud_tp_meter_pos_x = Number(Moghunter.parameters['TP Meter X-Axis'] || 245);
Moghunter.bhud_tp_meter_pos_y = Number(Moghunter.parameters['TP Meter Y-Axis'] || 102);
Moghunter.bhud_tp_meter_rotation = Number(Moghunter.parameters['TP Meter Angle'] || 0);
Moghunter.bhud_tp_meter_flow = String(Moghunter.parameters['TP Meter Flow Anime'] || 'true');
Moghunter.bhud_tp_number_visible = String(Moghunter.parameters['TP Number Visible'] || 'true');
Moghunter.bhud_tp_number_align = Number(Moghunter.parameters['TP Number Align type'] || 0);
Moghunter.bhud_tp_number_pos_x = Number(Moghunter.parameters['TP Number X-Axis'] || 440);
Moghunter.bhud_tp_number_pos_y = Number(Moghunter.parameters['TP Number Y-Axis'] || 74);
Moghunter.bhud_maxtp_visible = String(Moghunter.parameters['MaxTP Number Visible'] || 'false');
Moghunter.bhud_maxtp_pos_x = Number(Moghunter.parameters['MaxTP Number X-Axis'] || 0);
Moghunter.bhud_maxtp_pos_y = Number(Moghunter.parameters['MaxTP Number Y-Axis'] || 0);

// ATB
Moghunter.bhud_atb_meter_visible = String(Moghunter.parameters['ATB Meter Visible'] || 'true');
Moghunter.bhud_atb_meter_pos_x = Number(Moghunter.parameters['ATB Meter X-Axis'] || 162);
Moghunter.bhud_atb_meter_pos_y = Number(Moghunter.parameters['ATB Meter Y-Axis'] || 203);
Moghunter.bhud_atb_meter_rotation = Number(Moghunter.parameters['ATB Meter Angle'] || 0);
Moghunter.bhud_atb_meter_flow = String(Moghunter.parameters['ATB Meter Flow Anime'] || 'true');

// States
Moghunter.bhud_states_visible = String(Moghunter.parameters['States Visible'] || 'true');
Moghunter.bhud_states_pos_x = Number(Moghunter.parameters['States X-Axis'] || 240);
Moghunter.bhud_states_pos_y = Number(Moghunter.parameters['States Y-Axis'] || 132);
Moghunter.bhud_states_mode = Number(Moghunter.parameters['States Mode'] || 0);
Moghunter.bhud_states_max = Number(Moghunter.parameters['States Max'] || 4);
Moghunter.bhud_states_align = Number(Moghunter.parameters['States Align'] || 0);

// Window Command
Moghunter.bhud_command_auto_adjust = Number(Moghunter.parameters['Command Auto Adjust'] || 0);
Moghunter.bhud_command_pos_x = Number(Moghunter.parameters['W Command X-Axis'] || 0);
Moghunter.bhud_command_pos_y = Number(Moghunter.parameters['W Command Y-Axis'] || -208);
Moghunter.bhud_command_width = Number(Moghunter.parameters['W Command Width'] || 0);
Moghunter.bhud_command_height = Number(Moghunter.parameters['W Command Height'] || 0);
Moghunter.bhud_command_slide_x = Number(Moghunter.parameters['W Command Slide X'] || 0);
Moghunter.bhud_command_slide_y = Number(Moghunter.parameters['W Command Slide Y'] || 111);
Moghunter.bhud_command_layout = String(Moghunter.parameters['Layout Command'] || 'true');
Moghunter.bhud_command_layout_x = Number(Moghunter.parameters['L Command X-Axis'] || -47);
Moghunter.bhud_command_layout_y = Number(Moghunter.parameters['L Command Y-Axis'] || -43);

// Window Party
Moghunter.bhud_party_pos_x = Number(Moghunter.parameters['W Party X-Axis'] || 765);
Moghunter.bhud_party_pos_y = Number(Moghunter.parameters['W Party Y-Axis'] || 294);
Moghunter.bhud_party_width = Number(Moghunter.parameters['W Party Width'] || 0);
Moghunter.bhud_party_height = Number(Moghunter.parameters['W Party Height'] || 0);
Moghunter.bhud_party_slide_x = Number(Moghunter.parameters['W Party Slide X'] || 0);
Moghunter.bhud_party_slide_y = Number(Moghunter.parameters['W Party Slide Y'] || -173);
Moghunter.bhud_party_layout = String(Moghunter.parameters['Layout Party'] || 'true');
Moghunter.bhud_party_layout_x = Number(Moghunter.parameters['L Party X-Axis'] || -765);
Moghunter.bhud_party_layout_y = Number(Moghunter.parameters['L Party Y-Axis'] || -73);

// Window Help
Moghunter.bhud_help_pos_x = Number(Moghunter.parameters['W Help X-Axis'] || 0);
Moghunter.bhud_help_pos_y = Number(Moghunter.parameters['W Help Y-Axis'] || 0);
Moghunter.bhud_help_width = Number(Moghunter.parameters['W Help Width'] || 0);
Moghunter.bhud_help_height = Number(Moghunter.parameters['W Help Height'] || 0);
Moghunter.bhud_help_slide_x = Number(Moghunter.parameters['W Help Slide X'] || 0);
Moghunter.bhud_help_slide_y = Number(Moghunter.parameters['W Help Slide Y'] || -87);
Moghunter.bhud_help_layout = String(Moghunter.parameters['Layout Help'] || 'true');
Moghunter.bhud_help_layout_x = Number(Moghunter.parameters['L Help X-Axis'] || 0);
Moghunter.bhud_help_layout_y = Number(Moghunter.parameters['L Help Y-Axis'] || 0);

// Window Skill
Moghunter.bhud_skill_pos_x = Number(Moghunter.parameters['W Skill X-Axis'] || 0);
Moghunter.bhud_skill_pos_y = Number(Moghunter.parameters['W Skill Y-Axis'] || 0);
Moghunter.bhud_skill_width = Number(Moghunter.parameters['W Skill Width'] || 0);
Moghunter.bhud_skill_height = Number(Moghunter.parameters['W Skill Height'] || 0);
Moghunter.bhud_skill_maxcols = Number(Moghunter.parameters['W Skill maxCols'] || 2);
Moghunter.bhud_skill_slide_x = Number(Moghunter.parameters['W Skill Slide X'] || 0);
Moghunter.bhud_skill_slide_y = Number(Moghunter.parameters['W Skill Slide Y'] || 87);
Moghunter.bhud_skill_layout = String(Moghunter.parameters['Layout Skill'] || 'true');
Moghunter.bhud_skill_layout_x = Number(Moghunter.parameters['L Skill X-Axis'] || 0);
Moghunter.bhud_skill_layout_y = Number(Moghunter.parameters['L Skill Y-Axis'] || -116);

// Window Item
Moghunter.bhud_item_pos_x = Number(Moghunter.parameters['W Item X-Axis'] || 0);
Moghunter.bhud_item_pos_y = Number(Moghunter.parameters['W Item Y-Axis'] || 0);
Moghunter.bhud_item_width = Number(Moghunter.parameters['W Item Width'] || 0);
Moghunter.bhud_item_height = Number(Moghunter.parameters['W Item Height'] || 0);
Moghunter.bhud_item_maxcols = Number(Moghunter.parameters['W Item maxCols'] || 2);
Moghunter.bhud_item_slide_x = Number(Moghunter.parameters['W Item Slide X'] || 0);
Moghunter.bhud_item_slide_y = Number(Moghunter.parameters['W Item Slide Y'] || 87);
Moghunter.bhud_item_layout = String(Moghunter.parameters['Layout Item'] || 'true');
Moghunter.bhud_item_layout_x = Number(Moghunter.parameters['L Item X-Axis'] || 0);
Moghunter.bhud_item_layout_y = Number(Moghunter.parameters['L Item Y-Axis'] || -116);

// Window Actor
Moghunter.bhud_actor_pos_x = Number(Moghunter.parameters['W Actor X-Axis'] || 0);
Moghunter.bhud_actor_pos_y = Number(Moghunter.parameters['W Actor Y-Axis'] || 0);
Moghunter.bhud_actor_width = Number(Moghunter.parameters['W Actor Width'] || 200);
Moghunter.bhud_actor_height = Number(Moghunter.parameters['W Actor Height'] || 0);
Moghunter.bhud_actor_maxcols = Number(Moghunter.parameters['W Actor maxCols'] || 1);
Moghunter.bhud_actor_slide_x = Number(Moghunter.parameters['W Actor Slide X'] || 0);
Moghunter.bhud_actor_slide_y = Number(Moghunter.parameters['W Actor Slide Y'] || 87);
Moghunter.bhud_actor_layout = String(Moghunter.parameters['Layout Actor'] || 'true');
Moghunter.bhud_actor_layout_x = Number(Moghunter.parameters['L Actor X-Axis'] || 0);
Moghunter.bhud_actor_layout_y = Number(Moghunter.parameters['L Actor Y-Axis'] || -116);

// Window Enemy
Moghunter.bhud_enemy_pos_x = Number(Moghunter.parameters['W Enemy X-Axis'] || 0);
Moghunter.bhud_enemy_pos_y = Number(Moghunter.parameters['W Enemy Y-Axis'] || 0);
Moghunter.bhud_enemy_width = Number(Moghunter.parameters['W Enemy Width'] || 200);
Moghunter.bhud_enemy_height = Number(Moghunter.parameters['W Enemy Height'] || 0);
Moghunter.bhud_enemy_maxcols = Number(Moghunter.parameters['W Enemy maxCols'] || 2);
Moghunter.bhud_enemy_slide_x = Number(Moghunter.parameters['W Enemy Slide X'] || 0);
Moghunter.bhud_enemy_slide_y = Number(Moghunter.parameters['W Enemy Slide Y'] || 87);
Moghunter.bhud_enemy_layout = String(Moghunter.parameters['Layout Enemy'] || 'true');
Moghunter.bhud_enemy_layout_x = Number(Moghunter.parameters['L Enemy X-Axis'] || 0);
Moghunter.bhud_enemy_layout_y = Number(Moghunter.parameters['L Enemy Y-Axis'] || -116);

// Screen Layout
Moghunter.bhud_screen_layout = String(Moghunter.parameters['Screen Layout'] || 'true');
Moghunter.bhud_screen_layout_x = Number(Moghunter.parameters['Screen X-Axis'] || 0);
Moghunter.bhud_screen_layout_y = Number(Moghunter.parameters['Screen Y-Axis'] || 0);

// Custom Positions
Moghunter.bhud_custom_pos = [];
for (var i = 1; i <= 8; i++) {
    Moghunter.bhud_custom_pos[i] = String(Moghunter.parameters['Custom Position ' + i] || '');
}

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBHud = function(filename) {
    return this.loadBitmap('img/battlehud/', filename);
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_bhud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _mog_bhud_sys_initialize.call(this);
    this._bhud_visible = true;
};

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * processVictory
//==============================
var _mog_bhud_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
    _mog_bhud_processVictory.call(this);
    if (SceneManager._scene._battleHud) {
        SceneManager._scene._battleHud.visible = false;
    }
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// * create Spriteset
//==============================
var _mog_bhud_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
    _mog_bhud_sbattle_createSpriteset.call(this);
    this.createBattleHud();
};

//==============================
// * create Battle Hud
//==============================
Scene_Battle.prototype.createBattleHud = function() {
    this._battleHud = new BattleHud();
    this._battleHud.mz = true;
    this.addChild(this._battleHud);
};

//=============================================================================
// ** Battle Hud
//=============================================================================
function BattleHud() {
    this.initialize.apply(this, arguments);
}

BattleHud.prototype = Object.create(Sprite.prototype);
BattleHud.prototype.constructor = BattleHud;

//==============================
// * Initialize
//==============================
BattleHud.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.visible = false;
    this.createHud();
};

//==============================
// * Create Hud
//==============================
BattleHud.prototype.createHud = function() {
    // Placeholder for HUD creation logic
    // This would include loading sprites, positioning elements, etc.
};

//==============================
// * Update
//==============================
BattleHud.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.visible = $gameSystem._bhud_visible;
    if (!this.visible) return;
    // Update logic for HUD elements would go here
};
